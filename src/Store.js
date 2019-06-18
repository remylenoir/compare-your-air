import React, { useState, createContext } from 'react';

// Create and export the Contexts
export const DataContext = createContext();
export const SearchContext = createContext();

const Store = ({ children }) => {
  const [search, setSearch] = useState({
    options: [],
    input: ''
  });

  const [data, setData] = useState({
    locations: []
  });

  return (
    // The application is wrapped by the Providers
    <SearchContext.Provider value={[search, setSearch]}>
      <DataContext.Provider value={[data, setData]}>{children}</DataContext.Provider>
    </SearchContext.Provider>
  );
};

export default Store;
