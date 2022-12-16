import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useContext, useEffect, useState } from 'react'
import CityCard from '../../components/CityCard'
import { UserContext } from '../../context/UserContext'
import { RootStackParamList } from '../../navigation'
import { findCityCode, loadCities } from '../../services/CityService'
import { CityFilterInput, Container, ScrollPanel } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'Config'>

const Config = ({ navigation }: Props) => {
  const [filter, setFilter] = useState('')
  const [filteredCities, setFilteredCities] = useState<string[]>([])

  const cities = loadCities()

  useEffect(() => {
    if (filter) {
      const citiesFound = cities.filter((c) =>
        c.toLowerCase().includes(filter.toLowerCase())
      )
      setFilteredCities(citiesFound.length > 0 ? citiesFound.slice(0, 5) : [])
    } else {
      setFilteredCities([])
    }
  }, [filter])

  const { setCityCode, setCityName } = useContext(UserContext)

  const onCitySelected = (cityName: string) => {
    setCityName(cityName)
    findCityCode(cityName).then((cityCode) => {
      setCityCode(cityCode)
      navigation.pop()
    })
  }

  return (
    <Container>
      <CityFilterInput
        placeholder='Digite o nome da cidade'
        value={filter}
        onChangeText={setFilter}
      />

      {filteredCities.length > 0 && (
        <ScrollPanel>
          {filteredCities.map((c, index) => (
            <CityCard
              key={index}
              cityName={c}
              onPress={() => onCitySelected(c)}
            />
          ))}
        </ScrollPanel>
      )}
    </Container>
  )
}

export default Config
