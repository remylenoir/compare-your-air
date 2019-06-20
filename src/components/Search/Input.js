import React, { useContext } from 'react';

// App contexts (states)
import { DataContext, SearchContext, SelectionContext } from '../../Store';

const SearchInput = () => {
  const [data] = useContext(DataContext);
  const [search, setSearch] = useContext(SearchContext);
  const [selection, setSelection] = useContext(SelectionContext);

  const handleChange = event => {
    let results = [];
    const { value } = event.target;
    const locations = data.locations.map(element => element.location);

    if (value.length > 0) {
      results = locations.filter(element =>
        element
          .toLowerCase()
          .slice(0, value.length)
          .includes(value.toLowerCase())
      );
    }

    setSearch({
      results,
      input: value
    });
  };

  const openCard = value => {
    const selected = data.locations.find(element => element.location === value);
    const checkSelection = selection.locations.find(element => element.location === value);

    if (selected === checkSelection) {
      setSearch({ ...search, input: 'Already selected!' });

      setTimeout(() => {
        setSearch({ ...search, input: '' });
      }, 1500);

      return null;
    }

    setSelection({ locations: [...selection.locations, selected] });
    setSearch({ input: '', results: [] });
  };

  const renderResults = () => {
    const { results } = search;

    if (results.length > 0) {
      return (
        <div className='search__results position-absolute'>
          {results.map((location, index) => (
            <div key={index} className='search__result' onClick={() => openCard(location)}>
              {location}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <div className='search position-relative'>
        <input
          type='search'
          placeholder='Enter city name...'
          className='search__input position-relative'
          value={search.input}
          onChange={handleChange}
        />
        {renderResults()}
      </div>
    </>
  );
};

export default SearchInput;
