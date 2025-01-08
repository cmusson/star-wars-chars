import useCharacters from "../../hooks/useCharacters";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../storage/store";
import { useCallback, useEffect, useState } from "react";
import {
  BASE_URL,
  fetchAllCharacters,
  fetchCharacters,
} from "../../storage/characters/charactersActions";
import CharCard from "../CharCard/CharCard";
import CardSkeleton from "../CardSkeleton";
import PaginationButton from "../PagniationButton";
import { Modal } from "../Modal";
import CharModalContent from "../Modal/CharModalContent";
import { setCharSelected } from "../../storage/characters/charactersSlice";

const CharList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCharacters(BASE_URL));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, [dispatch]);

  const {
    characters,
    loading,
    error,
    currentPage,
    totalPages,
    charSelected,
    searchTerm,
    filteredCharacters,
  } = useCharacters();

  const handleClose = useCallback(() => {
    dispatch(setCharSelected(null));
    setModalOpen(false);
  }, [dispatch]);

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const userMessage = () => {
    switch (true) {
      case searchTerm === "":
        return !totalPages
          ? "Loading..."
          : `Page ${currentPage} of ${totalPages}`;
      case filteredCharacters.length === 0:
        return "No Results Found...";
      default:
        return "Character Search Results (Clear search to return to your page)";
    }
  };

  return (
    <section className="p-4">
      <div>{userMessage()}</div>

      <div className="flex justify-between my-4">
        <PaginationButton variant="previous" />
        <PaginationButton variant="next" />
      </div>

      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {searchTerm === ""
            ? loading
              ? // show skeleton cards while loading character cards
                Array.from({ length: 10 }).map((_, idx) => (
                  <li key={`skeleton-${idx}`}>
                    <CardSkeleton />
                  </li>
                ))
              : characters.map((char) => (
                  <li key={`${char.uid}-${char.name}`}>
                    <CharCard char={char} openModal={openModal} />
                  </li>
                ))
            : filteredCharacters.map((char) => (
                <li key={`${char.uid}-${char.name}`}>
                  <CharCard char={char} openModal={openModal} />
                </li>
              ))}
        </ul>
      )}
      <Modal
        isOpen={modalOpen}
        title={charSelected ? charSelected.name : ""}
        handleClose={handleClose}
      >
        {<CharModalContent />}
      </Modal>
    </section>
  );
};

export default CharList;
