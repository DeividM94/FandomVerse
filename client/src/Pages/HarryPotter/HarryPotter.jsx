import React, { useEffect, useState } from "react";
import axios from "axios";
import "./harryPotter.scss";

import { Gallery } from "../../components/Gallery/Gallery";

export const HarryPotter = () => {
  const [characters, setCharacters] = useState([]);
  const [searchHarryPotter, setSearchHarryPotter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://hp-api.onrender.com/api/characters")
      .then((res) => {
        setCharacters(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  console.log(characters[1])
  

  const datosFiltrados = characters.filter((character) =>
    character.name.toLowerCase().includes(searchHarryPotter.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchHarryPotter(e.target.value);
  };

  return (
    <div className="harry-potter-container p-1">
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
        <div className="d-flex justify-content-around">
          <Gallery items={datosFiltrados} />
        </div>
      )}
    </div>
  );
};
