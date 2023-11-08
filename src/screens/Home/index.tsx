import { Header } from '@components/Header'
import { ButtonLabel, Container } from './styles'
import { Balance } from '@components/Balance'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'
import { DayList } from '@components/DayList'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { Alert, FlatList } from 'react-native'
import { mealsGetAll } from '@storage/meal/mealsGetAll'
import { formatMomentDate } from '@utils/formatMomentDate'

export function Home() {
  const [dates, setDates] = useState<string[]>([])

  const navigation = useNavigation()

  function handleAddMeal() {
    navigation.navigate('addMeal')
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll()

      const groupByDate = Array.from(new Set(data.flatMap((meal) => meal.date)))

      const formattedDates = groupByDate.map((date) => formatMomentDate(date))

      console.log(formattedDates)

      setDates(formattedDates)
    } catch (error) {
      console.log(error)
      Alert.alert('Meals', 'Error fetching meals')
    }
  }

  // async function clearAllData() {
  //   AsyncStorage.getAllKeys()
  //     .then((keys) => AsyncStorage.multiRemove(keys))
  //     .then(() => alert('success'))
  // }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
      // clearAllData()
    }, []),
  )

  return (
    <Container>
      <Header />

      <Balance percentage="90,86" />

      <ButtonLabel>Refeições</ButtonLabel>
      <Button
        title="New meal"
        icon={<Plus size={18} color="#FFF" />}
        onPress={handleAddMeal}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={dates.sort((a, b) => b.localeCompare(a))}
        renderItem={({ item }) => <DayList date={item} />}
      />
    </Container>
  )
}
