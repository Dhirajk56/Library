import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return res.status(401).json({ message: "Authentication token required" });
  }
  jwt.verify(token, "bookstore123", (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "token expired. Please signIn again" });
    }
    req.user = user;
    next();
  });
};
export default authenticateToken;
