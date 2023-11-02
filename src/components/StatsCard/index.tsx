import { Container, Stats, Subtitle } from './styles'

type Props = {
  stats: number
  subtitle: string
}

export function StatsCard({ stats, subtitle }: Props) {
  return (
    <Container>
      <Stats>{stats}</Stats>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
