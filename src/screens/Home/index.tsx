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
  const [meals, setMeals] = useState<MealStorageDTO[]>([])

  const navigation = useNavigation()

  function handleAddMeal() {
    navigation.navigate('addMeal')
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll()

      const dataWithFormattedDate = data.map(({ date, ...rest }) => ({
        ...rest,
        date: formatMomentDate(date),
      }))

      setMeals(dataWithFormattedDate)
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
        keyExtractor={(item) => item.id}
        data={meals.sort((a, b) => b.date.localeCompare(a.date))}
        renderItem={({ item }) => <DayList date={item.date} />}
      />
    </Container>
  )
}
