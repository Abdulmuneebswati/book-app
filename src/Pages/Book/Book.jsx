import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Book = () => {
  const location = useLocation();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(location.state.books);
  }, [location]);

  return (
    <div className="flex justify-center gap-10 flex-wrap items-center p-[40px]">
      {!books && <h1>No data to show</h1>}
      {books &&
        books.map((book) => {
          return (
            <div
              key={book._id}
              className="max-w-sm h-[650px] rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-[200px]"
                src={book.imageUrl}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {book.book} By {book.authorName}
                </div>
                <p className="text-gray-700 text-base">{book.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Book;
