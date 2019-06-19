import React, { useContext } from 'react';

// App contexts (states)
import { DataContext } from '../../Store';

// Externak packages
import moment from 'moment';

const LocationCard = () => {
  const [data] = useContext(DataContext);

  return (
    <>
      {data.locations.map((entry, index) => (
        <div
          key={index}
          style={{ background: 'white', color: 'red', width: '300px', padding: '30px', margin: '30px' }}
        >
          <p>{moment(entry.measurements[0].lastUpdated).fromNow()}</p>
          <p>{entry.location}</p>
          <p>in {entry.city}, United Kingdom</p>
          <p>
            Values:{' '}
            {entry.measurements.map((element, index) => {
              return (
                <div key={index}>
                  {element.parameter}: {element.value},
                </div>
              );
            })}
          </p>
        </div>
      ))}
    </>
  );
};

export default LocationCard;
