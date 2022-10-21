type Weather = {
  time: Date
  description: string
  temperature: number
  iconNumber: number
}

export const getWeather = (obj: any) => {
  // Associação por desestruturação (detructuring)
  const { DateTime, WeatherIcon, IconPhrase, Temperature } = obj
  const weather: Weather = {
    description: IconPhrase,
    iconNumber: WeatherIcon,
    temperature: Temperature.Value,
    time: new Date(DateTime),
  }

  return weather
}

export default Weather
