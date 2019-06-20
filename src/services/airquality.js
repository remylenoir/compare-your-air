// External packages
import axios from 'axios';

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

export default getData;
