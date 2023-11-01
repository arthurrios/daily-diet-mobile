import { Header } from '@components/Header'
import { ButtonLabel, Container } from './styles'
import { Balance } from '@components/Balance'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'

export function Home() {
  return (
    <Container>
      <Header />
      <Balance percentage="90,86" />
      <ButtonLabel>Refeições</ButtonLabel>
      <Button title="Nova refeição" icon={<Plus size={18} color="#FFF" />} />
    </Container>
  )
}
