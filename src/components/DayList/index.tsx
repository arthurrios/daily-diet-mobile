/* eslint-disable react-hooks/exhaustive-deps */
import { FoodItem } from '@components/FoodItem'
import { Container, Date } from './styles'
import { Alert, FlatList } from 'react-native'
import { mealsGetByDate } from '@storage/meal/mealsGetByDate'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

type Props = {
  date: string
}

export function DayList({ date }: Props) {
  const [mealsByDate, setMealsByDate] = useState<MealStorageDTO[]>([])

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
        data={mealsByDate}
        keyExtractor={(item) => item.id}
        style={{ gap: 8 }}
        renderItem={({ item }) => (
          <FoodItem
            title={item.name}
            time={item.time}
            type={item.healthy === true ? 'HEALTHY' : 'UNHEALTHY'}
          />
        )}
      />
    </Container>
  )
}
