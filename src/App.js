import React, { useEffect, useContext } from 'react';

// App contexts (states)
import { DataContext } from './Store';

// App services
import getData from './services/airquality';

// App components
import SearchInput from './components/Search/Input';
import LocationCard from './components/Location/Card';

const App = () => {
  const [, setData] = useContext(DataContext);

  // Get the data from the API and update the context's state
  useEffect(() => {
    getData('GB', 500)
      .then(locations => setData({ locations }))
      .catch(error => console.error(error));
  }, [setData]);

  return (
    <div className='main-container d-flex p-20'>
      <div>
        <h1 className='text-white text-center'>Compare your Air</h1>
        <p className='text-white text-center'>Compare the air quality between cities in the UK.</p>
        <p className='text-white text-center mt-0'>
          Select cities to compare using the search tool below.
        </p>
      </div>

      <SearchInput />
      <LocationCard />
    </div>
  );
};

export default App;
