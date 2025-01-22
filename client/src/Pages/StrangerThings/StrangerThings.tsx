import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Gallery } from "../../components/Gallery/Gallery";


export interface StrangerThingsCharacter {
  id: string;
  name: string;
  residence: string;
  photo: string;
  born: string;
}

export const StrangerThings: FC = () => {
  const [characters, setCharacters] = useState<StrangerThingsCharacter[]>([]);
  const [searchStrangerThings, setSearchStrangerThings] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 60; // Items per page

  useEffect(() => {
    const fetchCharacters = async () => {
      let allCharacters: StrangerThingsCharacter[] = [];
      
      for (let page = 1; page <= 6; page++) {
        try {
          const response = await axios.get(`https://stranger-things-api.fly.dev/api/v1/characters?page=${page}`);
          allCharacters = [...allCharacters, ...response.data]; // Concatenar los personajes de cada página
        } catch (err) {
          console.error("Error fetching characters:", err);
        }
      }

      setCharacters(allCharacters);
      setIsLoading(false);
    };

    fetchCharacters();
  }, []);

  const datosFiltrados = characters.filter(
    (character) =>
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

  return (
    <div className="stranger-things-container">
      <h1 className="stranger-things-title">
        <img src="./st-characters-title.png" alt="stranger-things-title" />
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
            <Gallery<StrangerThingsCharacter> items={currentItems} />
          </div>

          <div className="pagination-container">{paginationButtons}</div>
        </>
      )}
    </div>
  );
};
