"use client";

import Image from "next/image";
import { useState } from "react"; // Import useState
import { Header } from "./Components/Header";

export default function Home() {
  const [form, setForm] = useState({}); // State for product name

  // Sample stock data (replace this with your actual stock data)

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <Header />

      <div className="container mx-auto py-6 px-4">
        <div className="container">
          <h1 className="text-3xl text-center mb-4">Search a Product</h1>

          <div className="flex shadow border rounded p-6 flex-col mb-6">
            <input
              type="text"
              placeholder="search a product"
              className="mt-1 px-4 py-2 w-full border rounded focus:ring focus:ring-blue-300"
            />

            <select
              id="category"
              className=" px-4 mt-3 py-2 w-full border rounded focus:ring focus:ring-blue-300"
            >
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              {/* Add more categories as needed */}
            </select>
            <button
              type="submit"
              className="px-6 py-2 mt-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Search
            </button>
          </div>
        </div>
        {/* Display Current Stock */}
        <div className="container my-6  bg-red-50 mx-auto px-8 shadow">
          <h1 className="text-3xl text-center mb-4"> Add a Product </h1>
          {/* Form to add a new product */}
          <form onSubmit={handleOnSubmit} className="mb-6 ">
            <div className="flex flex-col flex-wrap   mb-4">
              <div className="w-1/2  ">
                <label
                  htmlFor="productName"
                  className="block text-gray-700 font-medium"
                >
                  Product Slug:
                </label>
                <input
                  type="text"
                  id="productName"
                  className="mt-1 px-4 py-2 w-full border rounded focus:ring focus:ring-blue-300"
                  onChange={handleOnChange}
                  name="slug"
                />
              </div>
              <div className="w-1/2 ">
                <label
                  htmlFor="quantity"
                  className="block text-gray-700 font-medium"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="mt-1 px-4 py-2 w-full border rounded focus:ring focus:ring-blue-300"
                  onChange={handleOnChange}
                  name="quantity"
                />
              </div>
            </div>
            <div className="w-1/2 mb-4 ">
              <label
                htmlFor="productName"
                className="block text-gray-700 font-medium"
              >
                Price:
              </label>
              <input
                type="number"
                id="productName"
                className="mt-1 px-4 py-2 w-full border rounded focus:ring focus:ring-blue-300"
                name="price"
                onChange={handleOnChange}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 te bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Add Product
            </button>
          </form>

          <h1 className="text-3xl mb-4">Display Current Stock</h1>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200  border-b">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">id</td>
                <td className="px-4 py-2">name</td>
                <td className="px-4 py-2">quantity</td>
                <td className="px-4 py-2">price</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
