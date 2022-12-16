import axios from 'axios'
import Weather, { getWeather } from '../models/Weather'
import { API_KEY, API_URL, CITY_CODE, WEATHER_ENDPOINT } from '../config/api'

const http = axios.create({ baseURL: API_URL })

export const findWeathers = async (cityCode: number) => {
  const response = await http.get(`${WEATHER_ENDPOINT}/${cityCode}`, {
    params: {
      apikey: API_KEY,
      language: 'pt-BR',
      metric: true,
    },
  })

  const weathers: Weather[] = []

  if (response.status == 200) {
    const { data } = response
    data.forEach((d: any) => {
      const w = getWeather(d)
      weathers.push(w)
    })
  }

  return weathers
}
