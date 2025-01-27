import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";

export const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="contenedor-ppal">
      <div className="card-container">
        <div
          className="card card-1"
          onClick={() => navigate("/harry-potter")}
        ></div>
        <div className="card card-2"
         onClick={() => navigate("/stranger-things")}
         ></div>
        <div className="card card-3"></div>
        <div className="card card-4"></div>
      </div>
    </div>
  );
};
