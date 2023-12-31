/* eslint-disable react-hooks/exhaustive-deps */
import { FoodItem } from '@components/FoodItem'
import { Container, Date } from './styles'
import { Alert, FlatList } from 'react-native'
import { mealsGetByDate } from '@storage/meal/mealsGetByDate'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

type Props = {
  date: string
}

export function DayList({ date }: Props) {
  const [mealsByDate, setMealsByDate] = useState<MealStorageDTO[]>([])

  const navigation = useNavigation()

  function handleOpenItem(foodItem: MealStorageDTO) {
    navigation.navigate('meal', { foodItem })
  }

  async function fetchMealsByDate() {
    try {
      const data = await mealsGetByDate(date)

      setMealsByDate(data)
    } catch (error) {
      console.log(error)
      Alert.alert('Meals', 'Error fetching meals by date.')
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealsByDate()
    }, []),
  )

  return (
    <Container>
      <Date>{date}</Date>
      <FlatList
        data={mealsByDate.sort((a, b) => b.time.localeCompare(a.time))}
        keyExtractor={(item) => item.id}
        style={{ gap: 8 }}
        renderItem={({ item }) => (
          <FoodItem
            title={item.name}
            time={item.time}
            type={item.healthy === true ? 'HEALTHY' : 'UNHEALTHY'}
            onPress={() => handleOpenItem(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
