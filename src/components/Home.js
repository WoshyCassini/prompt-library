import React, { useState, useEffect, useRef } from 'react';
import Tile from './Tile';
import './Home.css'; // Import the CSS file for styling
import PromptDetails from './PromptDetails';


// Import MockedBFF
import { MockedBFF } from '../api/MockedBFF';

const Home = () => {
  const [visibleTiles, setVisibleTiles] = useState(10); // Number of initially visible tiles
  const [isLoading, setIsLoading] = useState(false); // Loading state for fetching more tiles
  const [searchQuery, setSearchQuery] = useState(''); // Search
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  
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



// Filter data
  const filteredData = data.filter((item) =>
  item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.description.toLowerCase().includes(searchQuery.toLowerCase())
);

// Slide non visible tiles
const visibleData = filteredData.slice(0, Math.min(visibleTiles,filteredData.length));



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
      </div>

      {!selectedPrompt && visibleData.map((item, index) => (
        <Tile key={index} title={item.title} description={item.description} onClick={() => setSelectedPrompt(item)} />
      ))}

      

      {selectedPrompt && <PromptDetails data={selectedPrompt} />}


      {!selectedPrompt && isLoading && <div className="loading-message">Loading...</div>}

      <div ref={tileRef} />
    </div>
  );
};

export default Home;
