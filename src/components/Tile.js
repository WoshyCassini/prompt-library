import React from 'react';
import './Tile.css';

const Tile = ({ title, description }) => (
  <div className="tile-wrapper">
    <h2 className="tile-title">{title}</h2>
    <p className="tile-description">{description}</p>
  </div>
);

export default Tile;