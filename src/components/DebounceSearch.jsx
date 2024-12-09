import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
// import throttle from 'lodash.throttle';

const DebouncedSearch = () => {
  const [query, setQuery] = useState('');

  // Function to handle search input changes
  const handleSearch = (event) => {
    setQuery(event.target.value);
    // Perform search operation here
    console.log('Searching for:', event.target.value);
  };

  const debouncedSearch = useCallback(debounce(handleSearch, 500), []);
  // const throttledSearch = useCallback(throttle(handleSearch, 500), []);

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={debouncedSearch}
      // onChange={throttledSearch}
      // onChange={handleSearch}
    />
  );
};

export default DebouncedSearch;