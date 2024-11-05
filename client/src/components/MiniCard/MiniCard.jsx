import React from 'react';
import './minicard.scss';


export const MiniCard = ({ data }) => {
  console.log(data);
  
  return (
    <div className="book">
      <div>
        <h1>{data.name}</h1>
        <p >{data.alternate_names[0]}</p>
        <p >{data.ancestry}</p>
        <p >{data.house}</p>
        <div>{data.patronus ? <p> Patronus: {data.patronus} </p> : "" }
        </div>
      </div>
      <div className="cover">
        {data.image ? (
          <img src={data.image} alt={data.name} className="cover-image" />
        ) : (
          <img src="./card-default.jpg" alt="default-image" className="cover-image" />
        )}
      </div>
    </div>
  );
};
