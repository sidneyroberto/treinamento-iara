import { NativeStackScreenProps } from '@react-navigation/native-stack'
import WeatherCard from '../../components/WeatherCard'
import Weather from '../../models/Weather'
import { RootStackParamList } from '../../navigation'
import { Container, ScrollPanel } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'NextWeathers'>

const NextWeathers = ({ route }: Props) => {
  const { weathers } = route.params

  return (
    <Container>
      <ScrollPanel>
        {weathers.map((w: Weather, index) => (
          <WeatherCard weather={w} key={index} />
        ))}
      </ScrollPanel>
    </Container>
  )
}

export default NextWeathers
