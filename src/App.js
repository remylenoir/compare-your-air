import React, { useEffect, useContext } from 'react';

// App contexts (states)
import { DataContext } from './Store';

// App services
import getData from './services/airquality';

// App components
import SearchInput from './components/Search/Input';

const App = () => {
  const [, setData] = useContext(DataContext);

  // Get the data from the API and update the context's state
  useEffect(() => {
    getData('GB')
      .then(locations => setData({ locations }))
      .catch(error => console.error(error));
  }, [setData]);

  return (
    <div className='main-container d-flex p-20'>
      <h1 className='m-0 text-white'>Compare your Air</h1>
      <p className='text-white'>Compare the air quality between cities in the UK.</p>
      <p className='text-white mt-0'>Select cities to compare using the search tool below.</p>
      <SearchInput />
    </div>
  );
};

export default App;
