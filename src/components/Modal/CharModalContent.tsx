import InfoItem from "../InfoItem";
import useCharacters from "../../hooks/useCharacters";

const CharModalContent = () => {
  const { charSelected, homeworld } = useCharacters();
  return (
    <>
      {charSelected && (
        <div>
          <InfoItem label="Height" value={charSelected.height} />
          <InfoItem label="Birth Year" value={charSelected.birth_year} />
          <InfoItem
            label="Date Added"
            value={new Intl.DateTimeFormat("en", {
              year: "numeric",
            }).format(new Date(charSelected.created))}
          />
          <div>
            {homeworld && (
              <div>
                <h4 className="font-semibold mt-2 text-center">Homeworld</h4>

                <InfoItem label="Name" value={homeworld.name} />
                <InfoItem label="Terrain" value={homeworld.terrain} />
                <InfoItem label="Climate" value={homeworld.climate} />
                <InfoItem
                  label="Population"
                  value={new Intl.NumberFormat("en-US").format(
                    Number(homeworld.population)
                  )}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CharModalContent;
