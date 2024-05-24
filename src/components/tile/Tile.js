import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="title-title">{name}</p>
      {Object.values(description)?.map((value, index) => {
        return (<p className="tile" key={`attb-${index}`}>{value}</p>)
      })}
    </div>

  );
};
