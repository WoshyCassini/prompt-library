import React, { useState } from 'react';
import Tile from './Tile';

const Home = () => {
  const [visibleTiles, setVisibleTiles] = useState(10); // Number of initially visible tiles

  // Mocked data entries
  const data = [
    { title: 'Tile 1', description: 'Description 1' },
    { title: 'Tile 2', description: 'Description 2' },
    { title: 'Tile 3', description: 'Description 3' },
    { title: 'Tile 4', description: 'Description 4' },
    { title: 'Tile 5', description: 'Description 5' },
    { title: 'Tile 6', description: 'Description 6' },
    { title: 'Tile 7', description: 'Description 7' },
    { title: 'Tile 8', description: 'Description 8' },
    { title: 'Tile 9', description: 'Description 9' },
    { title: 'Tile 10', description: 'Description 10' },
    { title: 'Tile 11', description: 'Description 11' },
    { title: 'Tile 12', description: 'Description 12' },
    { title: 'Tile 13', description: 'Description 13' },
    { title: 'Tile 14', description: 'Description 14' },
    { title: 'Tile 15', description: 'Description 15' },
    { title: 'Tile 16', description: 'Description 16' },
    { title: 'Tile 17', description: 'Description 17' },
    { title: 'Tile 18', description: 'Description 18' },
    { title: 'Tile 19', description: 'Description 19' },
    { title: 'Tile 20', description: 'Description 20' },
    { title: 'Tile 17', description: 'Description 17' },
    { title: 'Tile 18', description: 'Description 18' },
    { title: 'Tile 19', description: 'Description 19' },
    { title: 'Tile 20', description: 'Description 20' },
  ];

  const visibleData = data.slice(0, visibleTiles);

  const loadMoreTiles = () => {
    const nextVisibleTiles = visibleTiles + 10;
    setVisibleTiles(Math.min(nextVisibleTiles, data.length));
  };

  return (
    <div>
      {visibleData.map((item, index) => (
        <Tile key={index} title={item.title} description={item.description} />
      ))}

      {visibleTiles < data.length && (
        <button onClick={loadMoreTiles}>Load More</button>
      )}
    </div>
  );
};

export default Home;
