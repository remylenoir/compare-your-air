import React, { useContext, useEffect } from 'react';

import Card from '../Location/Card';

// App contexts (states)
import { DataContext, SearchContext, SelectionContext } from '../../Store';

const SearchInput = () => {
  const [data] = useContext(DataContext);
  const [search, setSearch] = useContext(SearchContext);
  const [selection, setSelection] = useContext(SelectionContext);

  // useEffect(() => {
  //   console.log('useEffect', selection);
  // });

  const onChange = event => {
    let results = [];
    const { value } = event.target;
    const locations = data.locations.map(element => element.location);

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      results = locations.sort().filter(v => regex.test(v));
    }
    setSearch(() => ({
      ...search,
      results,
      input: value
    }));
  };

  const selectedResults = value => {
    const picked = data.locations.find(element => element.location === value);

    setSelection(() => ({ locations: [...selection.locations, picked] }));
    setSearch(() => ({ ...search, input: value, results: [] }));
  };

  const renderResults = () => {
    const { results } = search;
    if (results.length === 0) {
      return null;
    }
    return (
      <>
        <div style={{ background: 'white', width: '306px', maxHeight: '130px', overflow: 'scroll' }}>
          {results.map((location, index) => (
            <div
              key={index}
              onClick={() => selectedResults(location)}
              style={{
                height: '25px',
                lineHeight: '25px',
                borderBottom: '1px solid #d9d9d9',
                color: '#777',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              {location}
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div className='search'>
        <input
          type='search'
          placeholder='Enter city name'
          className='search__input'
          value={search.input}
          onChange={onChange}
        />
        {renderResults()}
      </div>
      <br />
      <Card />
    </>
  );
};

export default SearchInput;
