import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RootStackParamList from './navigation'
import Details from './screens/Details'
import Home from './screens/Home'

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Cards' }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
