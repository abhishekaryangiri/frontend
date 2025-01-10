import { useEffect, useState } from 'react';
import './WeatherComponent.css';  // Import the CSS file

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/weather/New Delhi')
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((err) => {
        setError('Error fetching weather data');
        console.error(err);
      });
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!weatherData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="weather-container">
      <h1>Weather Information</h1>
      <div className="weather-info">
        <p><strong>City:</strong> {weatherData.city}</p>
        <p><strong>Temperature:</strong> {weatherData.temperature}</p>
        <p><strong>Air Quality:</strong> {weatherData['air-quality']}</p>
        <p><strong>Climate:</strong> {weatherData.climate}</p>
        <p><strong>Visibility:</strong> {weatherData.visibility}</p>
      </div>
    </div>
  );
};

export default WeatherComponent;
