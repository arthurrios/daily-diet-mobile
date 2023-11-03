import { TouchableOpacityProps, View } from 'react-native'
import { Container, Line, Status, Time, Title } from './styles'
import { HealthStyleProps } from '@components/Balance/styles'

type Props = TouchableOpacityProps & {
  type: HealthStyleProps
  time: string
  title: string
}

export function FoodItem({ time, title, type }: Props) {
  return (
    <Container>
      <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <Time>{time}</Time>
        <Line />
        <Title>{title}</Title>
      </View>
      <Status type={type} />
    </Container>
  )
}
