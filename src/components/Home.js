import React, { useState, useEffect, useRef } from 'react';
import Tile from './Tile';
import './Home.css'; // Import the CSS file for styling

// Import MockedBFF
import { MockedBFF } from '../api/MockedBFF';

const Home = () => {
  const [visibleTiles, setVisibleTiles] = useState(10); // Number of initially visible tiles
  const [isLoading, setIsLoading] = useState(false); // Loading state for fetching more tiles
  const [searchQuery, setSearchQuery] = useState(''); // Search
  const tileRef = useRef(null);

  // Create an instance of MockedBFF
  const myBFF = new MockedBFF();

  // Use getTileData to populate the data array
  const data = myBFF.getTileData();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
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
      setTimeout(() => {
        setVisibleTiles((prevVisibleTiles) => {
          const nextVisibleTiles = prevVisibleTiles + 10;
          return Math.min(nextVisibleTiles, data.length);
        });
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading, data.length]);

  // Filter tiles

  // Slide non visible tiles
  const visibleData = data.slice(0, visibleTiles);

  const handleSearch = () => {
    const filteredData = visibleData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  };


  return (
    <div className="home-container">
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filtern..."
          className="search-bar"
        />
        <button className="search-button">Filtern</button>
      </div>



      {visibleData.map((item, index) => (
        <Tile key={index} title={item.title} description={item.description} />
      ))}

      {isLoading && <div className="loading-message">Loading...</div>}

      <div ref={tileRef} />
    </div>
  );
};

export default Home;
