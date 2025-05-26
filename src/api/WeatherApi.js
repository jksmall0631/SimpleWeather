import axios from 'axios';


const WeatherApi = {
  async getWeatherData(city) {

    const API_KEY = '9170e0e85794088df319259526c55afd';
    const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`;

    try {
      const response = await axios.get(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }
};

export default WeatherApi;