import React, { useEffect, useRef } from 'react';
import './Signup.css'; // Make sure to add the corresponding CSS styles

const TileGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const tile = container.querySelector('.tile');

      if (tile) {
        for (let i = 0; i < 1599; i++) {
          container.appendChild(tile.cloneNode(true));
        }
      }
    }
  }, []);

  return (
    <div id="container" ref={containerRef}>
      <div className="tile"></div>
    </div>
  );
};

export default TileGrid;
