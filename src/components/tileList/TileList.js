import React from "react";
import { Tile } from "../tile/Tile"


export const TileList = ({ dataArray }) => {
  return (
    <div>
    {dataArray?.map((data, index) => {
      const {name, ...rest} = data;
      return (
        <Tile name={name} description={rest} key={`tile-${index}`}/>
      )
    })}
  </div>
  );
};
