import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../storage/store";
import { setSearchTerm } from "../../storage/characters/charactersSlice";

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  // Debounce for serch input
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchValue === "") {
        dispatch(setSearchTerm(""));
        return;
      }
      dispatch(setSearchTerm(searchValue));
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchValue, dispatch]);

  return (
    <input
      value={searchValue}
      onChange={handleChange}
      placeholder="Search characters"
      aria-label={"search characters"}
      type="search"
      className="text-black w-full border border-gray-40 rounded-lg p-1 transition-colors ease-in-out duration-100 focus:border-primary-100 outline:primary-100 disabled:cursor-not-allowed"
    />
  );
};

export default Search;
