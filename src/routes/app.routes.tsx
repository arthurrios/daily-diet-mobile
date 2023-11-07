import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { Stats } from '@screens/Stats'
import { AddMeal } from '@screens/AddMeal'
import { Feedback } from '@screens/Feedback'
import { EditMeal } from '@screens/EditMeal'
import { Meal } from '@screens/Meal'
const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {/* <Screen name="home" component={Home} />
      <Screen name="stats" component={Stats} />
      <Screen name="addMeal" component={AddMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="editMeal" component={EditMeal} /> */}
      <Screen name="meal" component={Meal} />
    </Navigator>
  )
}
