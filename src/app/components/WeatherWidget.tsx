import { useEffect, useState, memo } from 'react';
import { MapPin, Thermometer, Cloud, Sun, CloudRain, Loader2 } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: string;
  location: string;
  humidity: number;
}

export const WeatherWidget = memo(function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        if (!apiKey) {
          setError('Weather API key not configured');
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();

        setWeather({
          temperature: Math.round(data.main.temp),
          condition: data.weather[0].main,
          location: data.name,
          humidity: data.main.humidity
        });
      } catch (err) {
        setError('Unable to fetch weather data');
        console.error('Weather fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    const getLocation = () => {
      // Disabled location access, using default location
      fetchWeather(28.6139, 77.2090); // Delhi coordinates
    };

    getLocation();
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return <Sun className="h-5 w-5 text-yellow-500" />;
      case 'clouds':
        return <Cloud className="h-5 w-5 text-gray-500" />;
      case 'rain':
      case 'drizzle':
        return <CloudRain className="h-5 w-5 text-blue-500" />;
      default:
        return <Cloud className="h-5 w-5 text-gray-400" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border">
        <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
        <span className="text-sm text-gray-600">Loading weather...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border">
        <MapPin className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-600">Weather unavailable</span>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm border hover:shadow-md transition-shadow">
      <div className="flex items-center gap-1">
        <MapPin className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">{weather.location}</span>
      </div>

      <div className="flex items-center gap-2">
        {getWeatherIcon(weather.condition)}
        <div className="flex items-center gap-1">
          <Thermometer className="h-4 w-4 text-red-500" />
          <span className="text-sm font-semibold text-gray-800">{weather.temperature}°C</span>
        </div>
      </div>

      <div className="text-xs text-gray-500">
        {weather.condition}
      </div>
    </div>
  );
});