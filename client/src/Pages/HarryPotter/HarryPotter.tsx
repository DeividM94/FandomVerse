import {FC, useEffect, useState } from "react";
import axios from "axios";
import "./harryPotter.scss";

import { Gallery } from "../../components/Gallery/Gallery";

export interface Character {
  id: string;
  name: string;
  alternate_names: string;
  ancestry: string;
  house: string;
  patronus: string;
  image: string;
}

export const HarryPotter: FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchHarryPotter, setSearchHarryPotter] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
