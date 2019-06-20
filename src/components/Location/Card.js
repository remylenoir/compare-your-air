import React, { useContext } from 'react';

// App contexts (states)
import { SelectionContext } from '../../Store';

// External packages
import moment from 'moment';

const LocationCard = () => {
  const [selection, setSelection] = useContext(SelectionContext);
  const { locations } = selection;

  const closeCard = value => {
    const selected = locations.find(element => element.location === value);
    const filteredSelection = locations.filter(element => element !== selected);
    setSelection({ locations: filteredSelection });
  };

  return (
    <div className='cards d-flex'>
      {locations.length > 0 &&
        locations.map((element, index) => {
          return (
            <div key={index} className='card position-relative'>
              <div className='card__close position-absolute' onClick={() => closeCard(element.location)}>
                X
              </div>

              <p className='card__time text-uppercase'>
                Updated {moment(element && element.measurements[0].lastUpdated).fromNow()}
              </p>
              <p className='card__location'>{element && element.location}</p>
              <p className='card__city'>in {element && element.city}, United Kingdom</p>
              <p className='card__measurements'>
                Values:{' '}
                {element &&
                  element.measurements.map((element, index) => {
                    return (
                      <span key={index}>
                        {element.parameter}: {element.value}
                        <span className='parameter-separator'>,</span>{' '}
                      </span>
                    );
                  })}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default LocationCard;
