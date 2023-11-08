import { Arrow, Container, Form, Header, Label, Main, Title } from './styles'
import { Alert, View } from 'react-native'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Select } from '@components/Select'
import { Button } from '@components/Button'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getCurrentDateTime } from '@utils/getCurrentDateTime'
import { AppError } from '@utils/AppError'
import { mealCreate } from '@storage/meal/mealCreate'
import { formatToMomentFormatDate } from '@utils/formatToMomentFormatDate'
import uuid from 'react-native-uuid'

export function AddMeal() {
  const [healthy, setHealthy] = useState(false)
  const [unhealthy, setUnhealthy] = useState(false)

  const { dateTime, hourTime } = getCurrentDateTime()
  const [time, setTime] = useState(hourTime)
  const [date, setDate] = useState(dateTime)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  function handleHealthy() {
    setHealthy(!healthy)
    setUnhealthy(false)
  }

  function handleUnhealthy() {
    setUnhealthy(!unhealthy)
    setHealthy(false)
  }

  async function handleNew() {
    try {
      if (name.trim().length === 0) {
        return Alert.alert('New Meal', 'Please enter a name')
      }

      if (description.trim().length === 0) {
        return Alert.alert('New Meal', 'Please enter a description')
      }

      if (date.trim().length === 0) {
        return Alert.alert('New Meal', 'Please enter a date')
      }

      if (time.trim().length === 0) {
        return Alert.alert('New Meal', 'Please enter a time')
      }

      const momentDate = formatToMomentFormatDate(date)

      await mealCreate({
        id: uuid.v4().toString(),
        name,
        description,
        date: momentDate,
        time,
        healthy,
      })

      navigation.navigate('home')
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('New Meal', error.message)
      } else {
        Alert.alert('New Meal', 'It was not possible to register a new meal.')
      }
    }
  }

  return (
    <Container>
      <Header>
        <ButtonIcon icon={<Arrow />} onPress={handleGoBack} />
        <Title>New Meal</Title>
      </Header>
      <Main
        style={{
          shadowOpacity: 0.05,
          shadowColor: '#000',
          shadowRadius: 30,
        }}
      >
        <Form>
          <Input label="Name" onChangeText={setName} />
          <Input
            label="Description"
            size="TEXTAREA"
            multiline
            onChangeText={setDescription}
          />
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <Input
              label="Date"
              keyboardType="numbers-and-punctuation"
              placeholder="MM/DD/YYYY"
              value={date}
              onChangeText={setDate}
            />
            <Input
              label="Time"
              keyboardType="numbers-and-punctuation"
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
        <Button title="Register meal" onPress={handleNew} />
      </Main>
    </Container>
  )
}
