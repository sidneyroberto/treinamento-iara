import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppLoading from 'expo-app-loading'
import ConfigButton from './components/ConfigButton'
import { UserContextProvider } from './context/UserContext'
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
    <UserContextProvider>
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
            options={({ navigation }) => ({
              title: 'Vidente',
              headerRight: () => (
                <ConfigButton onPress={() => navigation.navigate('Config')} />
              ),
            })}
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
    </UserContextProvider>
  )
}

export default App
