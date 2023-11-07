import { Header } from '@components/Header'
import { ButtonLabel, Container } from './styles'
import { Balance } from '@components/Balance'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'
import { DayList } from '@components/DayList'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()

  function handleAddMeal() {
    navigation.navigate('addMeal')
  }

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

      <DayList date="02.11.23" />
      <DayList date="01.11.23" />
    </Container>
  )
}
