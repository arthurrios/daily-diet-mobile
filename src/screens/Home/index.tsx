import { Header } from '@components/Header'
import { ButtonLabel, Container } from './styles'
import { Balance } from '@components/Balance'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'
import { DayList } from '@components/DayList'

export function Home() {
  return (
    <Container>
      <Header />

      <Balance percentage="90,86" />

      <ButtonLabel>Refeições</ButtonLabel>
      <Button title="Nova refeição" icon={<Plus size={18} color="#FFF" />} />

      <DayList date="02.11.23" />
      <DayList date="01.11.23" />
    </Container>
  )
}
