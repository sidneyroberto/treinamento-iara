import { StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import RootStackParamList from '../navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({ route }: Props) => {
  const { message } = route.params

  return (
    <View style={styles.container}>
      <View style={styles.pannel}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pannel: {
    backgroundColor: '#043b5c',
    width: '90%',
    padding: 20,
    borderRadius: 15,
    marginTop: 30,
    alignItems: 'center',
  },
  message: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default Details
