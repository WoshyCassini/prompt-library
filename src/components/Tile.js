import React from 'react';
import './Tile.css';

const Tile = ({ data, onClick }) => (
  <div className="tile-wrapper" onClick={onClick}>
    <h2 className="tile-title">{data.title}</h2>
    <p className="tile-description">{data.description}</p>
  </div>
);

export default Tile;
