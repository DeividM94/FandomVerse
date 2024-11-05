import React, { useEffect, useState } from "react";
import axios from "axios";
import "./harryPotter.scss";

import { Gallery } from "../../components/Gallery/Gallery";

export const HarryPotter = () => {
  const [dataHarryPotter, setDataHarryPotter] = useState();

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

  return (
    <div>
      <h1>Harry Potter Characters</h1>
      <div className="d-flex justify-content-around">
        <div>
          <Gallery dataHarryPotter={dataHarryPotter}/>
        </div>
      </div>
    </div>
  );
};
