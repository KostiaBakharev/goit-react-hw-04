import css from "./SearchBar.module.css";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      toast.error("The search cannot be empty", {
        position: "top-right",
        style: {
          fontSize: "23px",
        },
      });
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Toaster />
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <input
            name="search"
            className={css.input}
            type="text"
            autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={handleChange}
          />

          <button type="submit" className={css.button}>
            <IoSearchSharp size={25} />
            <span className={css.btnText}>Search</span>
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
