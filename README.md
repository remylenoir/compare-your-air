# :dash: ​Compare your Air

## Introduction

The application allows you to compare the air quality from cities in the United Kingdom using a feed from [OpenAQ]([https://openaq.org](https://openaq.org/)). 

### Install and run the application

```markdown
npm i ; npm start
```

> By default, the app will start on the `3000` PORT.

---

### Technologies & methodologies

- Node JS
- React
- SASS
- BEM, DRY methodologies

### Modules

- axios — [GitHub](https://github.com/axios/axios) | [NPM](https://www.npmjs.com/package/axios)
- moment — [Website](http://momentjs.com/) | [NPM](https://www.npmjs.com/package/moment)
- node-sass — [GitHub](https://github.com/sass/node-sass) | [NPM](https://www.npmjs.com/package/node-sass) 

### Code structure

The application is using React hooks:

- `useState()`
- `useEffect()`
- `useContext()`

> More information: [hooks reference](https://reactjs.org/docs/hooks-reference.html)

### Application states

The application states are set in the `./Store.js`  , using the React Context API. Thus you can access to the states from anywhere in your application without the hassle to pass down the props/lift up the states in the components.

```javascript
// Store.js
export const DataContext = createContext();

const [data, setData] = useState({
	locations: []
});

<DataContext.Provider value={[data, setData]}>{children}</DataContext.Provider>
```

> More information: [Context API reference](https://reactjs.org/docs/context.html)

### Data fetching 

The data is fetched using an Axios `GET` request.

> More information: [npm package](https://www.npmjs.com/package/axios)

### Feed logic

In the current version, the feed is fetching the latest records. The output is filtered using these parameters:

- Country selection (ISO code): `country=GB`
- Limit: `limit=500`

> More information: [available feeds and parameters](https://docs.openaq.org/)

------

## Documentation

### Feed

#### Get and store the data

The `getData()` function is located at `./src/services/airquality.js`.

```javascript
// airquality.js
const getData = async (countryISO, limit) => {
  try {
    const response = await axios.get(
      `https://api.openaq.org/v1/latest?country=${countryISO}&limit=${limit}`
    );
    return response.data.results;
  } catch (error) {
    return console.error(error);
  }
};
```

In the main component `./src/App.js`, the arguments are passed to the `getData()` function.  

```javascript
// App.js
useEffect(() => {
    getData('GB', 500)
      .then(locations => setData({ locations }))
      .catch(error => console.error(error));
  }, [setData]);
```

#### Add a parameter

You can add a new parameter via the Axios `GET` request located at `./src/services/airquality.js`.

Then you can pass the value in the `getData()` function located at `./src/App.js` (see above) .

> More information: [available feeds and parameters](https://docs.openaq.org/)

------

### Styling

The application is styled via SASS, and using BEM methodology as a naming convention.  
Combining BEM with SASS make the code flow fast and powerful.

```scss
// _card.scss
.card {
  background-color: #fff;
  border-radius: $radius;
  margin: 20px;
  padding: 15px;
  width: $search-width;
  max-width: $search-width;
  box-shadow: $box-shadow;

  &__time {
    font-weight: 600;
    font-size: 0.8rem;
  }
  
  // ...
}
```

> More information: [SASS guidelines](https://sass-guidelin.es/) — [BEM methodology](https://en.bem.info/methodology/)

#### Structure

The application is using the [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern).

#### Add a SCSS file

You can add a file in the corresponding folders, in `./src/stylesheets/`.  
Please ensure to @import the file in the `./src/stylesheets/main.scss`.

```scss
// main.scss
// Abstracts: global variables, helpers, mixins, etc.
@import './abstracts/mixins';
@import './abstracts/helpers';
@import './abstracts/variables';

// Base: global styles (resets, typography, colors, etc)
@import './base/reset';
@import './base/typography';

// Components: styling for each components
@import './components/card';
@import './components/search';

// Pages: page-specific styling
@import './pages/home';

```

