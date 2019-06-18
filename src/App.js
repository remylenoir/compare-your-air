import React, { useEffect, useContext } from 'react';

// App contexts (states)
import { DataContext } from './Store';

// App services
import getData from './services/airquality';

// import axios from 'axios';
import './App.css';

// App components
import SearchInput from './components/Search/Input';

const App = () => {
  const [, setData] = useContext(DataContext);

  // Get the data from the API and update the context's state
  useEffect(() => {
    getData()
      .then(locations => setData({ locations }))
      .catch(error => console.error(error));
  }, [setData]);

  return (
    <div className='App'>
      <header className='App-header'>
        <SearchInput />
      </header>
    </div>
  );
};

export default App;
