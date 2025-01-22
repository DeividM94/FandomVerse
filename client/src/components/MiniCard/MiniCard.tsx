import React from 'react';
import './minicard.scss';

interface MiniCardProps {
  data: {
    name: string;
    alternate_names?: string[];
    ancestry?: string;
    house?: string;
    patronus?: string;
    image?: string;
    photo?: string;
    residence?: string;
    born?: string;
  };
}

export const MiniCard: React.FC<MiniCardProps> = ({ data }) => {
  return (
    <div className="book">
      <div className="text">
        <h1>{data.name}</h1>
        {data.alternate_names && <p>{data.alternate_names[0]}</p>}
        {data.ancestry && <p>{data.ancestry}</p>}
        {data.house && <p>{data.house}</p>}
        {data.patronus && <p> Patronus: {data.patronus} </p>}
        {data.residence && <p>Residence: {data.residence}</p>}
        {data.born && <p>Born: {data.born}</p>}
      </div>
      <div className="cover">
        {data.image || data.photo ? (
          <img src={data.image || data.photo} alt={data.name} className="cover-image" />
        ) : (
          <img src="./card-default.jpg" alt="default-image" className="cover-image" />
        )}
      </div>
    </div>
  );
};