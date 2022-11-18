import { getWeatherIconUri } from '../../assets/weather'
import Weather from '../../models/Weather'
import {
  Card,
  WeatherDescription,
  WeatherIcon,
  WeatherTemperature,
} from './styles'

type Props = {
  weather: Weather
}

const WeatherCard = ({ weather }: Props) => {
  return (
    <Card>
      <WeatherIcon source={getWeatherIconUri(weather.iconNumber)} />
      <WeatherDescription>
        {weather.time} | {weather.description}
      </WeatherDescription>
      <WeatherTemperature>{weather.temperature}°C</WeatherTemperature>
    </Card>
  )
}

export default WeatherCard
