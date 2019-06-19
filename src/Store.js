import React, { useState, createContext } from 'react';

// Create and export the Contexts
export const DataContext = createContext();
export const SearchContext = createContext();
export const SelectionContext = createContext();

const Store = ({ children }) => {
  const [search, setSearch] = useState({
    results: [],
    input: ''
  });

  const [selection, setSelection] = useState({
    locations: []
  });

  const [data, setData] = useState({
    locations: []
  });

  return (
    // The application is wrapped by the Providers
    <SearchContext.Provider value={[search, setSearch]}>
      <SelectionContext.Provider value={[selection, setSelection]}>
        <DataContext.Provider value={[data, setData]}>{children}</DataContext.Provider>
      </SelectionContext.Provider>
    </SearchContext.Provider>
  );
};

export default Store;
