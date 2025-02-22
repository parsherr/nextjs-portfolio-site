// hooks/useWeather.ts
import { useState, useEffect } from 'react';
import { openWeatherApiKey } from '../utils/variables';

const useWeather = (city: string) => {
  const [weather, setWeather] = useState<{ description: string; temperature: number } | null>(null);

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        setWeather({ description: weatherDescription, temperature });
      })
      .catch(error => console.error('Error:', error));
  }, [city]);

  return weather;
};

export default useWeather;
