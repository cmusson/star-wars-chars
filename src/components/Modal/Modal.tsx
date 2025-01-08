import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "../../Icons";

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  handleClose: () => void;
}

// Reusable modal component

const Modal = ({ children, isOpen, title, handleClose }: IModalProps) => {
  // Close modal when user presses escape key
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "unset";
      };
    }

    return undefined;
  }, [isOpen]);

  // If the modal root div does not exist, create with ID and append it
  let portalRoot = document.getElementById("modal-root");
  if (!portalRoot) {
    portalRoot = document.createElement("div");
    portalRoot.id = "modal-root";
    document.body.appendChild(portalRoot);
  }

  return createPortal(
    <>
      {/* Bubble up animation for modal */}
      <Transition
        show={isOpen}
        enter="transition duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-30"
        leave="transition duration-200 ease-in-out"
        leaveFrom="opacity-30"
        leaveTo="opacity-0"
      >
        {/* Outer black opaque background */}
        <button
          aria-label="Close Modal"
          onClick={handleClose}
          className="z-10 fixed top-0 left-0 w-screen h-screen bg-black opacity-30"
        />
      </Transition>
      <Transition
        show={isOpen}
        enter="transition duration-300"
        enterFrom="translate-y-6 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition duration-300 ease-in-out"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-6 opacity-0"
      >
        <div className="z-10 pointer-events-none fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-transparent">
          {/* Outer modal */}
          <div className="grid grid-rows-[auto,1fr] w-[450px] h-[420px] z-10 pointer-events-auto rounded-xl bg-disc bg-hero bg-cover bg-center bg-no-repeat shadow-2xl border border-gray-800">
            <div className="w-full flex justify-between items-center p-2 border-b border-gray-800">
              <span className="w-10" />
              <h3 className="text-center font-semibold text-xl text-white">
                {title}
              </h3>
              <div
                aria-label="Close Modal"
                onClick={handleClose}
                className="cursor-pointer"
              >
                <CloseIcon />
              </div>
            </div>
            {/* Modal content */}
            <div className="block px-8 py-6 w-full overflow-y-auto text-white">
              {children}
            </div>
          </div>
        </div>
      </Transition>
    </>,
    portalRoot
  );
};

export default Modal;
