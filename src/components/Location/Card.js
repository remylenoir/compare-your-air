import React, { useContext } from 'react';

// App contexts (states)
import { DataContext, SelectionContext } from '../../Store';

// Externak packages
import moment from 'moment';

const LocationCard = () => {
  // const [data] = useContext(DataContext);
  const [selection, setSelection] = useContext(SelectionContext);
  const { locations } = selection;

  // const removeSelection = value => {
  //   const picked = data.locations.find(element => element.location === value);

  //   const activeSelection = locations.filter(element => element !== picked);
  //   console.log('activeSelection', activeSelection);
  //   setSelection(() => ({ locations: [...locations, activeSelection] }));
  // };

  return (
    <>
      {locations.length > 0 &&
        locations.map((location, index) => {
          return (
            <div
              key={index}
              style={{
                background: 'white',
                color: 'red',
                width: '300px',
                padding: '30px',
                margin: '30px'
              }}
            >
              <p>{moment(location && location.measurements[0].lastUpdated).fromNow()}</p>
              <p>{location && location.location}</p>
              <p>in {location && location.city}, United Kingdom</p>
              <p>
                Values:{' '}
                {location &&
                  location.measurements.map((element, index) => {
                    return (
                      <span key={index}>
                        {element.parameter}: {element.value},
                      </span>
                    );
                  })}
              </p>
              {/* <div onClick={() => removeSelection(location.location)}>remove</div> */}
            </div>
          );
        })}
    </>
  );
};

export default LocationCard;
