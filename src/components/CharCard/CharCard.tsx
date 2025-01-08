import { useDispatch } from "react-redux";
import { CharacterBasic } from "../../types";
import { AppDispatch } from "../../storage/store";
import { fetchIndividualCharacter } from "../../storage/characters/charactersActions";

interface CharCardProps {
  char: CharacterBasic;
  openModal: () => void;
}
const CharCard = ({ char, openModal }: CharCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { name, uid } = char;

  const handleClick = () => {
    dispatch(fetchIndividualCharacter(char.uid));
    openModal();
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg hover:scale-105 transition cursor-pointer opacity-80 hover:opacity-100"
    >
      <img
        src={`https://picsum.photos/200?random=${uid}`}
        alt={name}
        className="rounded-md mb-2 h-40"
      />
      <h3 className="text-xl font-bold">{name}</h3>
    </div>
  );
};

export default CharCard;
