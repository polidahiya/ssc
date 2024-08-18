"use client";
import React, { useState, useEffect } from "react";
import filedata from "@/app/modules/Readjsonfile";

const ITEMS_PER_PAGE = 100; // Number of items to display per page

async function fetchData() {
  return await filedata("./public/WordnetNouns.json");
}

function Page() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [inputPage, setInputPage] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      setData(result);
      setTotalPages(Math.ceil(result?.length / ITEMS_PER_PAGE));
    };

    loadData();
  }, []);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    setInputPage(pageNumber);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= totalPages) {
      setInputPage(value);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    handlePageChange(inputPage);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, data?.length);
  const currentItems = data?.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Pagination Controls */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-center items-center space-x-4 z-10">
        <button
          className={`px-4 py-2 rounded-lg bg-gray-700 text-white ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-600"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <form
          onSubmit={handleInputSubmit}
          className="flex items-center space-x-2"
        >
          <input
            type="number"
            value={inputPage}
            onChange={handleInputChange}
            min="1"
            max={totalPages}
            className="px-4 py-2 rounded-lg bg-gray-700 text-white"
          />
          <span className="text-lg text-white">of {totalPages}</span>
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg bg-gray-700 text-white ${
              inputPage < 1 || inputPage > totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-600"
            }`}
            disabled={inputPage < 1 || inputPage > totalPages}
          >
            Go
          </button>
        </form>
        <button
          className={`px-4 py-2 rounded-lg bg-gray-700 text-white ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-600"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <div className="pt-16 p-[20px]">
        <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500 space-y-12">
          NOUNS
        </h1>
        <div className="space-y-12">
          {currentItems?.map((item, i) => {
            return (
              <div key={i} className="bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-4 text-center text-white">
                  {item.Word}
                </h2>
                <p className="text-lg mb-4 text-center">{item.Definition}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
