import { useSelector } from "react-redux";
import { RootState } from "../storage/store";

// cleaner access to state and other potential required values
const useCharacters = () => {
  const {
    characters,
    allCharacters,
    next,
    previous,
    loading,
    error,
    currentPage,
    totalPages,
    charSelected,
    homeworld,
    searchTerm,
  } = useSelector((state: RootState) => state.characters);

  const filteredCharacters = searchTerm
    ? allCharacters.filter((char) =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return {
    characters,
    allCharacters,
    next,
    previous,
    loading,
    error,
    currentPage,
    totalPages,
    charSelected,
    homeworld,
    searchTerm,
    filteredCharacters,
  };
};

export default useCharacters;
