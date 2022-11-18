import axios from 'axios'
import Weather, { getWeather } from '../models/Weather'

const API_KEY = 'msi0BPjHV7KR9qMG6vjhwI3kA1E8DtKj'
const API_URL = 'http://dataservice.accuweather.com'
const WEATHER_ENDPOINT = '/forecasts/v1/hourly/12hour'
const CITY_CODE = 38802 // Aquidauana-MS

const http = axios.create({ baseURL: API_URL })

export const findWeathers = async () => {
  const response = await http.get(`${WEATHER_ENDPOINT}/${CITY_CODE}`, {
    params: {
      apikey: API_KEY,
      language: 'pt-BR',
      metric: true,
    },
  })

  const weathers: Weather[] = []

  if (response.status == 200) {
    const { data } = response
    data.forEach((d: any) => getWeather(d))
  }

  return weathers
}
