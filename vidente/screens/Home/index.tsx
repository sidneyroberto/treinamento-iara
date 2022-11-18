import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useState } from 'react'
import Resume from '../../components/Resume'
import Weather from '../../models/Weather'
import { RootStackParamList } from '../../navigation'
import {
  Container,
  NextWeathersArea,
  NextWeathersButton,
  NextWeathersText,
} from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: Props) => {
  const [weathers, setWeathers] = useState<Weather[]>([
    {
      description: 'Ensolarado',
      iconNumber: 1,
      temperature: 36.5,
      time: '16:00',
    },
    {
      description: 'Ensolarado',
      iconNumber: 1,
      temperature: 36.5,
      time: '17:00',
    },
    {
      description: 'Ensolarado',
      iconNumber: 1,
      temperature: 36.5,
      time: '18:00',
    },
    {
      description: 'Ensolarado',
      iconNumber: 1,
      temperature: 36.5,
      time: '19:00',
    },
    {
      description: 'Ensolarado',
      iconNumber: 1,
      temperature: 36.5,
      time: '20:00',
    },
    {
      description: 'Ensolarado',
      iconNumber: 1,
      temperature: 36.5,
      time: '21:00',
    },
    {
      description: 'Ensolarado',
      iconNumber: 1,
      temperature: 36.5,
      time: '22:00',
    },
    {
      description: 'Ensolarado',
      iconNumber: 1,
      temperature: 36.5,
      time: '23:00',
    },
    {
      description: 'Ensolarado',
      iconNumber: 1,
      temperature: 36.5,
      time: '00:00',
    },
    {
      description: 'Ensolarado',
      iconNumber: 1,
      temperature: 36.5,
      time: '01:00',
    },
    {
      description: 'Ensolarado',
      iconNumber: 1,
      temperature: 36.5,
      time: '02:00',
    },
  ])

  return (
    <Container>
      <Resume
        cityName='Aquidauana-MS'
        currentTemperature={34.5}
        description='Ensolarado'
        iconNumber={1}
        maxTemperature={37}
        minTemperature={28}
      />

      <NextWeathersButton
        onPress={() => navigation.push('NextWeathers', { weathers })}
      >
        <NextWeathersArea>
          <NextWeathersText>Próximos climas</NextWeathersText>
        </NextWeathersArea>
      </NextWeathersButton>
    </Container>
  )
}

export default Home
