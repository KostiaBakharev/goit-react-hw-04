import css from "./SearchBar.module.css";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    onSubmit(inputValue);
    e.target.reset();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          name="search"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
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
  );
};

export default SearchBar;
