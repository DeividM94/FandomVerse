import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Gallery } from "../../components/Gallery/Gallery";
import "./harryPotter.scss";

export interface Character {
  id: string;
  name: string;
  alternate_names: string[];
  ancestry: string;
  house: string;
  patronus: string;
  image: string;
}

export const HarryPotter: FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchHarryPotter, setSearchHarryPotter] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 60; // Items per page

  useEffect(() => {
    axios
      .get("https://hp-api.onrender.com/api/characters")
      .then((res) => {
        setCharacters(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const datosFiltrados = characters.filter((character) =>
    character.name.toLowerCase().includes(searchHarryPotter.toLowerCase())
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
    setSearchHarryPotter(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="harry-potter-container">
      <h1 className="harry-potter-title">
        <img
          src="./hp-characters-title.png"
          alt="harry-potter-character-title"
        />
      </h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a character..."
          value={searchHarryPotter}
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
            <Gallery<Character> items={currentItems} />
          </div>

          <div className="pagination-container">{paginationButtons}</div>
        </>
      )}
    </div>
  );
};
