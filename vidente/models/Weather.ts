type Weather = {
  time: string
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
    time: DateTime ? DateTime.split('T')[1].substring(0, 5) : '',
  }

  return weather
}

export default Weather
