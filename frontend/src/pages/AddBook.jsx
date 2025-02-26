import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [book, setBook] = useState({
    class: "",
    url: "",
    title: "",
    author: "",
    category: "",
    availibility: "Available",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/add-book",
        book
      );
      alert("Book added successfully!");
      setBook({
        class: "",
        url: "",
        title: "",
        author: "",
        category: "",
        availibility: "Available",
      });
    } catch (error) {
      console.error("Error adding book", error);
      alert("Failed to add book");
    }
  };

  return (
    <div className=" md:w-120 w-80 mx-auto p-6 flex flex-col items-center mt-10  bg-white  text-black rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 font-bold">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-50">
        <input
          name="class"
          type="number"
          placeholder="Class"
          value={book.class}
          onChange={handleChange}
          required
          className="w-full p-2 bg-gray-700 rounded  "
        />
        <input
          name="url"
          type="text"
          placeholder="Image URL"
          value={book.url}
          onChange={handleChange}
          required
          className="w-full p-2 bg-gray-700  roundedborder border-gray-600"
        />
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          required
          className="w-full p-2 bg-gray-700  rounded  border-gray-600"
        />
        <input
          name="author"
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          required
          className="w-full p-2 bg-gray-700  rounded  border-gray-600"
        />
        <input
          name="category"
          type="text"
          placeholder="Category"
          value={book.category}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <select
          name="availibility"
          value={book.availibility}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        >
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
