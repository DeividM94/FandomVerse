import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Gallery } from "../../components/Gallery/Gallery";
import "./strangerThings.scss";

export interface StrangerThingsCharacter {
  id: string;
  name: string;
  residence: string[];
  photo: string;
  born: string;
}

export const StrangerThings: FC = () => {
  const [characters, setCharacters] = useState<StrangerThingsCharacter[]>([]);
  const [searchStrangerThings, setSearchStrangerThings] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 40;

  useEffect(() => {
    const fetchCharacters = async () => {
      let allCharacters: StrangerThingsCharacter[] = [];
   
      for (let page = 1; page <= 6; page++) {
        try {
          const response = await axios.get(
            `https://stranger-things-api.fly.dev/api/v1/characters?page=${page}`
          );
          allCharacters = [...allCharacters, ...response.data];
        } catch (err) {
          console.error("Error fetching characters:", err);
        }
      }

      setCharacters(allCharacters);
      setIsLoading(false);
    };

    fetchCharacters();
  }, []);

  const datosFiltrados = characters.filter((character) =>
    character.name?.toLowerCase().includes(searchStrangerThings.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datosFiltrados.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(datosFiltrados.length / itemsPerPage);
  const paginationButtons = Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => handlePageChange(index + 1)}
      className={`pagination-button ${
        currentPage === index + 1 ? "active" : ""
      }`}
    >
      {index + 1}
    </button>
  ));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStrangerThings(e.target.value);
    setCurrentPage(1);
  };


  const getValidPhoto = (photo: string) => {
    const placeholderPhoto = "/images/stranger-things-default.jpg";
    const specificPhotos = [
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
      "https://vignette.wikia.nocookie.net/strangerthings8338/images/4/41/6496D145-7DEC-4C23-BB62-0059C0A1A72E.jpeg/revision/latest/scale-to-width-down/310?cb=20190709215216",
    ];

    return specificPhotos.includes(photo) ? placeholderPhoto : photo;
  };

  return (
    <div className="stranger-things-container pb-3">
      <h1 className="stranger-things-title">
        <img src="./images/Stranger-Things-title.png" alt="stranger-things-title" />
      </h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a character..."
          value={searchStrangerThings}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-around">
            <Gallery<StrangerThingsCharacter>
              items={currentItems.map((character) => ({
                ...character,
                photo: getValidPhoto(character.photo),
              }))}
              styleType="stranger-things"
            />
          </div>
          <div className="pagination-container-st">{paginationButtons}</div>
        </>
      )}
    </div>
  );
};
