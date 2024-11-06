import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="contenedor-ppal">
      <div className="card-container">
        <div
          className="card card-1"
          onClick={() => navigate("/harry-potter")}
        ></div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
        <div className="card">Card 4</div>
      </div>
    </div>
  );
};
