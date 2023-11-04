import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { Stats } from '@screens/Stats'
import { MealForm } from '@screens/MealForm'
import { Feedback } from '@screens/Feedback'
const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {/* <Screen name="home" component={Home} /> */}
      {/* <Screen name="stats" component={Stats} /> */}
      {/* <Screen name="mealForm" component={MealForm} /> */}
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  )
}
