import React, { useState, useEffect, useRef } from 'react';
import Tile from './Tile';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [visibleTiles, setVisibleTiles] = useState(10); // Number of initially visible tiles
  const [isLoading, setIsLoading] = useState(false); // Loading state for fetching more tiles
  const tileRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
          // When the last tile is visible and not already loading, load more tiles
          setIsLoading(true);
        }
      },
      { threshold: 1 }
    );

    if (tileRef.current) {
      observer.observe(tileRef.current);
    }

    return () => {
      if (tileRef.current) {
        observer.unobserve(tileRef.current);
      }
    };
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      // Simulate API call or data fetch delay
      setTimeout(() => {
        setVisibleTiles((prevVisibleTiles) => {
          const nextVisibleTiles = prevVisibleTiles + 10;
          return Math.min(nextVisibleTiles, data.length);
        });
        setIsLoading(false);
      }, 1000); // Delay for demonstration purposes, replace with actual API call
    }
  }, [isLoading]);

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
    { title: 'Tile 21', description: 'Description 21' },
    { title: 'Tile 22', description: 'Description 22' },
    { title: 'Tile 23', description: 'Description 23' },
  ];

  const visibleData = data.slice(0, visibleTiles);

  return (
    <div className="home-container">
      {visibleData.map((item, index) => (
        <Tile key={index} title={item.title} description={item.description} />
      ))}

      {isLoading && <div className="loading-message">Loading...</div>}

      <div ref={tileRef} />
    </div>
  );
};

export default Home;
