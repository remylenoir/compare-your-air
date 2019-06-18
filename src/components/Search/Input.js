import React, { useContext } from 'react';

// App contexts (states)
import { DataContext, SearchContext } from '../../Store';

const SearchInput = () => {
  const [data] = useContext(DataContext);
  const [search, setSearch] = useContext(SearchContext);

  const onChange = event => {
    let options = [];
    const { value } = event.target;
    const locations = data.locations.map(element => element.location);

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      options = locations.sort().filter(v => regex.test(v));
    }
    setSearch(() => ({
      options,
      input: value
    }));
  };

  const selectedOptions = value => {
    setSearch({ input: value, options: [] });
  };

  const renderOptions = () => {
    const { options } = search;
    if (options.length === 0) {
      return null;
    }
    return (
      <div style={{ background: 'white', width: '306px', maxHeight: '130px', overflow: 'scroll' }}>
        {options.map((location, index) => (
          <div
            key={index}
            onClick={() => selectedOptions(location)}
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
    );
  };

  return (
    <>
      <div className='search'>
        <input
          type='text'
          placeholder='Enter city name'
          className='search-box'
          value={search.input}
          onChange={onChange}
          style={{ width: '300px' }}
        />
        {renderOptions()}
      </div>
      <br />
      {data.locations.map((city, index) => (
        <div key={index} style={{ background: 'white', width: '300px', padding: '30px' }}>
          <h3 style={{ color: 'red' }}>{city.location}</h3>
        </div>
      ))}
    </>
  );
};

export default SearchInput;
