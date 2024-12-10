import axios from "axios";
import React, { useEffect, useState } from "react";
import { Gallery } from "../../components/Gallery/Gallery";

export const StrangerThings = () => {
  const [characters, setCharacters] = useState([]);
  const [searchStrangerThings, setSearchStrangerThings] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://stranger-things-api.fly.dev/api/v1/characters")
      .then((res) => {
        setCharacters(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  console.log(characters)
  
  const datosFiltrados = characters.filter((character) => 
    character.name && character.name.toLowerCase().includes(searchStrangerThings.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchStrangerThings(e.target.value);
  };

  return (
    <div className="stranger-things-container p-1">
      <h1 className="stranger-things-title">
        {/* <img src="./stranger-things-title.png" alt="stranger-things-title" /> */}
      </h1>
      Barra de búsqueda
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
        <div className="d-flex justify-content-around">
           <Gallery items={datosFiltrados} /> 
        </div>
      )}
    </div>
  );
};
