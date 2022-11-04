import Resume from '../../components/Resume'
import {
  Container,
  NextWeathersArea,
  NextWeathersButton,
  NextWeathersText,
} from './styles'

const Home = () => {
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

      <NextWeathersButton>
        <NextWeathersArea>
          <NextWeathersText>Próximos climas</NextWeathersText>
        </NextWeathersArea>
      </NextWeathersButton>
    </Container>
  )
}

export default Home
