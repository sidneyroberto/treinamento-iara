import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppLoading from 'expo-app-loading'
import { RootStackParamList } from './navigation'
import Config from './screens/Config'
import Home from './screens/Home'
import NextWeathers from './screens/NextWeathers'

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: '#fff',
          },
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Vidente' }}
        />

        <Stack.Screen
          name='NextWeathers'
          component={NextWeathers}
          options={{ title: 'Próximos climas' }}
        />

        <Stack.Screen
          name='Config'
          component={Config}
          options={{ title: 'Configurações' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
