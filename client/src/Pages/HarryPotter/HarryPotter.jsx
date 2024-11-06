import React, { useEffect, useState } from "react";
import axios from "axios";
import "./harryPotter.scss";

import { Gallery } from "../../components/Gallery/Gallery";

export const HarryPotter = () => {
  const [dataHarryPotter, setDataHarryPotter] = useState([]);
  const [searchHarryPotter, setSearchHarryPotter] = useState("");

  useEffect(()=>{
    axios
      .get("https://hp-api.onrender.com/api/characters")
      .then((res) => {
        setDataHarryPotter(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  },[])

  
  const datosFiltrados = dataHarryPotter.filter((character) => 
    character.name.toLowerCase().includes(searchHarryPotter.toLocaleLowerCase()))

  const handleSearchChange = (e) => {
    setSearchHarryPotter(e.target.value);
  }


  return (
    <div className="harry-potter-container">
      <h1 className="harry-potter-title"><img src="./hp-characters-title.png" alt="harry-potter-character-title" /></h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a character..."
          value={searchHarryPotter}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="d-flex justify-content-around">
        <Gallery dataHarryPotter={datosFiltrados} />
      </div>
    </div>
  );
};
