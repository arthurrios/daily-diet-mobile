import { Header } from '@components/Header'
import { Container } from './styles'
import { Balance } from '@components/Balance'

export function Home() {
  return (
    <Container>
      <Header />
      <Balance percentage="90,86" type="UNHEALTHY" />
    </Container>
  )
}
