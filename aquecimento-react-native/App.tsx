import { StyleSheet, Text, View } from 'react-native'
import Card from './components/Card'

const App = () => {
  return (
    <View style={styles.container}>
      <Card message='Eu sou o card 1' />
      <Card message='Eu sou o card 2' />
      <Card message='Eu sou outro card' />
      <Card message='Eu sou o último card' />
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
})

export default App
