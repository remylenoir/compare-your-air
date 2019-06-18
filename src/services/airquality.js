// External packages
import axios from 'axios';

const getData = async () => {
  try {
    const response = await axios.get('https://api.openaq.org/v1/locations?country=GB');
    return response.data.results;
  } catch (error) {
    return console.error(error);
  }
};

export default getData;
