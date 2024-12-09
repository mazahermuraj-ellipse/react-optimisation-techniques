import { useState, useTransition, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const generateNames = (num) => {
  return Array.from({ length: num }, () => faker.person.fullName());
};

const UseTransitionDemo = () => {
  const [query, setQuery] = useState('');
  const [names, setNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [isPending, startTransition] = useTransition(); // useTransition hook

  useEffect(() => {
    const generatedNames = generateNames(10000);
    setNames(generatedNames);
    setFilteredNames(generatedNames);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Start a transition for the filtering operation
    startTransition(() => {
      // Filter names based on the query
      const filtered = names.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredNames(filtered); // Update the filteredNames state
    });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search names..."
      />
      {/* useTransition hook */}
      {isPending && <p>Updating list...</p>}
      <ul>
        {/* Render the filtered list of names */}
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseTransitionDemo;