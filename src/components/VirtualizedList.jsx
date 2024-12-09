import { useState, useEffect, useRef } from 'react';

// Generate an array of 1000 items for demonstration purposes
const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

// Component to render individual items
const Item = ({ index, style }) => {
  console.log(`Rendering Item ${index + 1}`);
  return (
    <div style={style}>
      {items[index]}
    </div>
  );
};

const VirtualizedList = () => {
  const containerRef = useRef(null); // Reference to the scrollable container
  const [visibleItems, setVisibleItems] = useState([]); // State to hold currently visible items
  const itemHeight = 35; // Fixed height for each item
  const containerHeight = 400; // Height of the scrollable container

  // Function to calculate and set the currently visible items based on scroll position
  const calculateVisibleItems = () => {
    const scrollTop = containerRef.current.scrollTop;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      items.length - 1,
      Math.floor((scrollTop + containerHeight) / itemHeight)
    );
    setVisibleItems(
      Array.from({ length: endIndex - startIndex + 1 }, (_, i) => startIndex + i)
    );
  };

  useEffect(() => {
    calculateVisibleItems(); // Initial calculation of visible items
    const handleScroll = () => {
      calculateVisibleItems(); // Recalculate on scroll
    };
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll); // Attach scroll event listener
    return () => {
      container.removeEventListener('scroll', handleScroll); // Clean up on unmount
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: `${containerHeight}px`,
        overflowY: 'auto',
        position: 'relative',
      }}
    >
      <div style={{ height: `${items.length * itemHeight}px`, position: 'relative' }}>
        {visibleItems.map((index) => (
          <Item
            key={index}
            index={index}
            style={{
              position: 'absolute',
              top: `${index * itemHeight}px`,
              height: `${itemHeight}px`,
              width: '100%',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VirtualizedList;