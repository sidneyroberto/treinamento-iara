import { StyleSheet, Text, View } from 'react-native'

type Props = {
  message: string
}

const Card = ({ message }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#043b5c',
    width: '100%',
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default Card
