import { Transition } from "@headlessui/react";
import useCharacters from "../../hooks/useCharacters";
import FilterButton from "../FilterButton";
import Search from "../Search";

const Header = () => {
  const { allCharacters } = useCharacters();

  return (
    <header className="w-full text-white bg-gray-800 opacity-80 p-4 flex items-center justify-between fixed top-0 left-0">
      <div className="flex items-center gap-2">
        <img
          className="w-12 h-12 bg-white rounded-lg"
          src="/socotecLogo.svg"
          alt="socotec logo"
        />
        <h1 className="text-2xl">Star Wars Characters</h1>
      </div>

      <div className="flex gap-2 items-center overflow-hidden">
        {/* Animation to show search and filter when all characters are fetched */}
        <Transition
          show={allCharacters.length > 0}
          enter="transform transition ease-out duration-500"
          enterFrom="translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transition ease-in duration-300"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="translate-x-full opacity-0"
        >
          <div className="flex gap-2 items-center">
            <Search />
            <FilterButton />
          </div>
        </Transition>
      </div>
    </header>
  );
};

export default Header;
