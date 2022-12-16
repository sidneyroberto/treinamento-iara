import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useContext, useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import Resume from '../../components/Resume'
import { UserContext } from '../../context/UserContext'
import Weather from '../../models/Weather'
import { RootStackParamList } from '../../navigation'
import { findWeathers } from '../../services/WeatherService'
import {
  Container,
  NextWeathersArea,
  NextWeathersButton,
  NextWeathersText,
} from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: Props) => {
  const [weathers, setWeathers] = useState<Weather[]>([])
  const [minTemperature, setMinTemperature] = useState(0)
  const [maxTemperature, setMaxTemperature] = useState(0)
  const [weathersLoaded, setWeathersLoaded] = useState(false)

  const { cityCode, cityName } = useContext(UserContext)

  const findLastWeathers = async () => {
    setWeathersLoaded(false)
    const lastWeathers = await findWeathers(cityCode)
    let max = Number.NEGATIVE_INFINITY,
      min = Number.POSITIVE_INFINITY

    lastWeathers.forEach((w) => {
      if (w.temperature > max) {
        max = w.temperature
      }

      if (w.temperature < min) {
        min = w.temperature
      }
    })

    setMaxTemperature(max)
    setMinTemperature(min)
    setWeathers(lastWeathers)
    setWeathersLoaded(true)
  }

  useEffect(() => {
    findLastWeathers()
  }, [cityCode])

  return (
    <Container>
      {weathersLoaded && (
        <>
          <Resume
            cityName={cityName}
            currentTemperature={weathers[0].temperature}
            description={weathers[0].description}
            iconNumber={weathers[0].iconNumber}
            maxTemperature={maxTemperature}
            minTemperature={minTemperature}
          />

          <NextWeathersButton
            onPress={() => navigation.push('NextWeathers', { weathers })}
          >
            <NextWeathersArea>
              <NextWeathersText>Próximos climas</NextWeathersText>
            </NextWeathersArea>
          </NextWeathersButton>
        </>
      )}

      {!weathersLoaded && <Loading />}
    </Container>
  )
}

export default Home
