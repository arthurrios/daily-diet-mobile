import {
  Arrow,
  BalanceStyleProps,
  Container,
  Percentage,
  Subtitle,
} from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  type?: BalanceStyleProps
  percentage?: string
}

export function Balance({ percentage, type = 'HEALTHY', ...props }: Props) {
  return (
    <Container type={type} {...props}>
      <Arrow type={type} />
      <Percentage>{percentage}%</Percentage>
      <Subtitle>of meals within diet</Subtitle>
    </Container>
  )
}
