import { useCallback, useState } from "react";
import { Modal, ComingSoon } from "../Modal";
import { FilterIcon } from "../../Icons";

// Filter Button to deploy filter modal
const Filter = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  return (
    <>
      <button
        onClick={openModal}
        className="hover:bg-gray-900 hover:scale-105 transition-all duration-300 active:bg-black p-1 rounded-lg cursor-pointer"
      >
        <FilterIcon />
      </button>
      {
        <Modal title="Filter" isOpen={modalOpen} handleClose={handleClose}>
          <ComingSoon />
        </Modal>
      }
    </>
  );
};

export default Filter;
