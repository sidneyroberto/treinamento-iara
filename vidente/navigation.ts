import Weather from './models/Weather'

export type RootStackParamList = {
  Home: undefined
  NextWeathers: { weathers: Weather[] }
  Config: undefined
}
