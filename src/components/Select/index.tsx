import { TouchableOpacityProps } from 'react-native'
import { Container, Option, SelectTypeStyleProps, Status } from './styles'
import { HealthStyleProps } from '@components/Balance/styles'

type Props = TouchableOpacityProps &
  SelectTypeStyleProps & {
    type: HealthStyleProps
  }

export function Select({
  type = 'HEALTHY',
  isSelected = false,
  ...props
}: Props) {
  return (
    <Container type={type} isSelected={isSelected} {...props}>
      <Status type={type} />
      <Option>{type === 'HEALTHY' ? 'Yes' : 'No'}</Option>
    </Container>
  )
}
