/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-catch */
import { Arrow, Container, Form, Header, Label, Main, Title } from './styles'
import { Alert, View } from 'react-native'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Select } from '@components/Select'
import { Button } from '@components/Button'
import { useCallback, useEffect, useState } from 'react'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { formatStorageDate } from '@utils/formatStorageDate'
import { AppError } from '@utils/AppError'
import { mealEdit } from '@storage/meal/mealEdit'
import { formatToMomentFormatDate } from '@utils/formatToMomentFormatDate'

type RouteParams = {
  foodItem: MealStorageDTO
}

export function EditMeal() {
  const [meal, setMeal] = useState<MealStorageDTO>({})
  const [healthy, setHealthy] = useState(false)
  const [unhealthy, setUnhealthy] = useState(false)

  const navigation = useNavigation()
  const route = useRoute()
  const { foodItem } = route.params as RouteParams

  const [time, setTime] = useState(foodItem.time)
  const [date, setDate] = useState(formatStorageDate(foodItem.date))

  const [name, setName] = useState(foodItem.name)
  const [description, setDescription] = useState(foodItem.description)

  function handleHealthy() {
    setHealthy(!healthy)
    setUnhealthy(false)
  }

  function handleUnhealthy() {
    setUnhealthy(!unhealthy)
    setHealthy(false)
  }

  async function setHealthyBasedOnStorage(foodItem: MealStorageDTO) {
    try {
      if (foodItem.healthy === true) {
        setHealthy(true)
      } else {
        setUnhealthy(true)
      }
    } catch (error) {
      throw error
    }
  }

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleEditMeal(meal: MealStorageDTO) {
    try {
      if (name.trim().length === 0) {
        return Alert.alert('Edit Meal', 'Please enter a name')
      }

      if (description.trim().length === 0) {
        return Alert.alert('Edit Meal', 'Please enter a description')
      }

      if (date.trim().length === 0) {
        return Alert.alert('Edit Meal', 'Please enter a date')
      }

      if (time.trim().length === 0) {
        return Alert.alert('Edit Meal', 'Please enter a time')
      }

      const momentDate = formatToMomentFormatDate(date)

      await mealEdit({
        id: foodItem.id,
        name,
        description,
        date: momentDate,
        time,
        healthy,
      })

      navigation.navigate('meal', { foodItem: meal })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Edit Meal', error.message)
      } else {
        Alert.alert('Edit Meal', 'It was not possible to edit meal.')
      }
    }
  }

  useEffect(() => {
    const momentDate = formatToMomentFormatDate(date)

    setMeal({
      id: foodItem.id,
      name,
      description,
      date: momentDate,
      time,
      healthy,
    })
  }, [name, description, date, time, healthy])

  useFocusEffect(
    useCallback(() => {
      setHealthyBasedOnStorage(foodItem)
      setMeal(foodItem)
    }, [foodItem]),
  )

  return (
    <Container>
      <Header>
        <ButtonIcon icon={<Arrow />} onPress={() => handleGoBack()} />
        <Title>Edit meal</Title>
      </Header>
      <Main
        style={{
          shadowOpacity: 0.05,
          shadowColor: '#000',
          shadowRadius: 30,
        }}
      >
        <Form>
          <Input label="Name" value={name} onChangeText={setName} />
          <Input
            label="Description"
            size="TEXTAREA"
            multiline
            value={description}
            onChangeText={setDescription}
          />
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <Input
              label="Date"
              keyboardType="numeric"
              placeholder="12/10/2023"
              value={date}
              onChangeText={setDate}
            />
            <Input
              label="Time"
              keyboardType="numeric"
              placeholder="16:00"
              value={time}
              onChangeText={setTime}
            />
          </View>
          <View>
            <Label>On diet?</Label>
            <View style={{ flexDirection: 'row', gap: 20, width: '100%' }}>
              <Select
                type="HEALTHY"
                isSelected={healthy}
                onPress={handleHealthy}
              />
              <Select
                type="UNHEALTHY"
                isSelected={unhealthy}
                onPress={handleUnhealthy}
              />
            </View>
          </View>
        </Form>
        <Button title="Save changes" onPress={() => handleEditMeal(meal)} />
      </Main>
    </Container>
  )
}
