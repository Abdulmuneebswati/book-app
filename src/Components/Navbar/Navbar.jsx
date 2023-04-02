import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const handleSearch = () => {
    Navigate("/book", {
      state: { books: books },
    });
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:8000/book?search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        Navigate("/book", {
          state: { books: data },
        });
      }, [])
      .catch((error) => console.log(error));
  }, [search]);
  return (
    <header className="  bg-[#FAFAFA] h-[15vh] b-[#FAFAFA] relative shadow-md pt-[41px] pb-[30px] flex justify-between items-center">
      <div className="invisible flex-[33.33%]"></div>
      <div className="flex-[33.33%] flex justify-center">
        <ul className="flex items-center  gap-x-8">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li className="text-[24px] text-center">Logo</li>
          <li>About</li>
        </ul>
      </div>

      <div className="flex-[33.33%] flex justify-center ">
        <div className="border">
          <input
            onChange={handleChange}
            className="h-[50px] bg-transparent  p-[10px] outline-none"
            type="text"
            placeholder="Search Here"
          />
          <button
            className="h-[50px] p-[10px]  border-l"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
