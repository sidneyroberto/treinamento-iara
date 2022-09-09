import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Card from '../components/Card'
import RootStackParamList from '../navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() =>
          navigation.push('Details', {
            message: 'O card 1 é o primeiro card',
            title: 'Card 1',
          })
        }
      >
        <Card message='Eu sou o card 1' />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardButton}
        onPress={() =>
          navigation.push('Details', {
            message: 'O card 2 é o segundo card',
            title: 'Card 2',
          })
        }
      >
        <Card message='Eu sou o card 2' />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardButton}
        onPress={() =>
          navigation.push('Details', {
            message: 'O card 3 é o terceiro card',
            title: 'Card 3',
          })
        }
      >
        <Card message='Eu sou outro card' />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardButton}
        onPress={() =>
          navigation.push('Details', {
            message: 'O card 4 é o último card',
            title: 'Card 4',
          })
        }
      >
        <Card message='Eu sou o último card' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  cardButton: {
    width: '100%',
  },
})

export default Home
