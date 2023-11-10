import {
  Arrow,
  HealthStyleProps,
  Container,
  Percentage,
  Subtitle,
} from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  type: HealthStyleProps
  percentage?: string
}

export function Balance({ percentage, type, ...props }: Props) {
  return (
    <Container type={type} {...props}>
      <Arrow type={type} />
      <Percentage>{percentage}%</Percentage>
      <Subtitle>of meals within diet</Subtitle>
    </Container>
  )
}
