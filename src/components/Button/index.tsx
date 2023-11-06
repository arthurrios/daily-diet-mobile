import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Title } from './styles'
import { ReactElement } from 'react'

type Props = TouchableOpacityProps & {
  icon?: ReactElement
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ icon, type = 'FILL', title, ...props }: Props) {
  return (
    <Container type={type} {...props}>
      {icon}
      <Title type={type}>{title}</Title>
    </Container>
  )
}
