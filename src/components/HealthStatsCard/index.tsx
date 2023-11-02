import { CardTypeStyleProps, Container, Stats, Subtitle } from './styles'

type Props = {
  type: CardTypeStyleProps
  stats: number
  subtitle: string
}

export function HealthStatsCard({ stats, type, subtitle }: Props) {
  return (
    <Container type={type}>
      <Stats>{stats}</Stats>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
