import { useDispatch } from "react-redux";
import useCharacters from "../../hooks/useCharacters";
import { AppDispatch } from "../../storage/store";
import { fetchCharacters } from "../../storage/characters/charactersActions";
import cn from "../../utils/tailwind-cn";

interface IPaginationButtonProps {
  variant: "previous" | "next";
}

const PaginationButton = ({ variant }: IPaginationButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { next, previous, currentPage, loading, totalPages, searchTerm } =
    useCharacters();

  const handleNext = () => {
    if (next) {
      dispatch(fetchCharacters(next));
    }
  };

  const handlePrevious = () => {
    if (previous) {
      dispatch(fetchCharacters(previous));
    }
  };

  const handleClick = variant === "next" ? handleNext : handlePrevious;

  // disabled if searching or with no next or previous page depending on variant
  const disabled =
    searchTerm !== "" ||
    (variant === "next"
      ? loading || currentPage === totalPages
      : loading || currentPage === 1);

  return (
    <button
      onClick={handleClick}
      className={cn(
        "capitalize px-6 py-3 rounded-md text-white font-semibold transition-all duration-300 bg-gray-700 ",
        disabled
          ? "bg-gray-500 cursor-not-allowed opacity-50"
          : "hover:-translate-y-1 hover:shadow-lg hover:scale-105 hover:ring-2 hover:ring-gray-500 focus:ring-2 focus:ring-gray-400"
      )}
      disabled={disabled}
    >
      {variant}
    </button>
  );
};

export default PaginationButton;
