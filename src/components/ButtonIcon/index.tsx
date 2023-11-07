import { ReactElement } from 'react'
import { Container } from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  icon: ReactElement
}

export function ButtonIcon({ icon, ...props }: Props) {
  return <Container {...props}>{icon}</Container>
}
