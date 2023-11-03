import { HealthStyleProps } from '@components/Balance/styles'
import { Arrow, Container, Main, Percentage, Subtitle, Title } from './styles'
import { View } from 'react-native'
import { ButtonIcon } from '@components/ButtonIcon'
import { StatsCard } from '@components/StatsCard'
import { HealthStatsCard } from '@components/HealthStatsCard'

type Props = {
  type?: HealthStyleProps
  percentage?: string
}

export function Stats({ percentage, type = 'HEALTHY' }: Props) {
  return (
    <Container type={type}>
      <ButtonIcon icon={<Arrow type={type} />} />
      <Percentage>90,86%</Percentage>
      <Subtitle>of meals within diet</Subtitle>
      <Main
        style={{
          shadowOpacity: 0.05,
          shadowColor: '#000',
          shadowRadius: 30,
        }}
      >
        <Title>General stats</Title>
        <View style={{ gap: 12 }}>
          <StatsCard stats={22} subtitle="best dish sequence within diet" />
          <StatsCard stats={109} subtitle="meals registered" />
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <HealthStatsCard
              stats={99}
              subtitle="meals within diet"
              type="HEALTHY"
            />
            <HealthStatsCard
              stats={10}
              subtitle="meals outside diet"
              type="UNHEALTHY"
            />
          </View>
        </View>
      </Main>
    </Container>
  )
}
