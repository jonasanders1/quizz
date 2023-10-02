
// Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

// Pages
import Home from "../Pages/Home"
import Quiz from "../Pages/Quiz"

const { Navigator, Screen } = createStackNavigator()

const AppRoutes = () => {
  return (
    <NavigationContainer>
        <Navigator>
            <Screen name="Home" component={Home} />
            <Screen name="Quiz" component={Quiz} />
        </Navigator>
    </NavigationContainer>
  )
   
}

export default AppRoutes