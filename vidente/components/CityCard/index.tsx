import { Card, CityName, Container } from './styles'

type Props = {
  cityName: string
  onPress: () => void
}

const CityCard = ({ cityName, onPress }: Props) => {
  return (
    <Card onPress={() => onPress()}>
      <Container>
        <CityName>{cityName}</CityName>
      </Container>
    </Card>
  )
}

export default CityCard
