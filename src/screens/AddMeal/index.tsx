import { Arrow, Container, Form, Header, Label, Main, Title } from './styles'
import { View } from 'react-native'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Select } from '@components/Select'
import { Button } from '@components/Button'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export function AddMeal() {
  const [healthy, setHealthy] = useState(false)
  const [unhealthy, setUnhealthy] = useState(false)

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
          <Input label="Name" />
          <Input label="Description" size="TEXTAREA" multiline />
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <Input
              label="Date"
              keyboardType="numeric"
              placeholder="12/10/2023"
            />
            <Input label="Time" keyboardType="numeric" placeholder="16:00" />
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
        <Button title="Register meal" />
      </Main>
    </Container>
  )
}
