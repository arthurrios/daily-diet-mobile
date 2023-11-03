import { TextInputProps } from 'react-native'
import { Container, InputBox, InputBoxTypeStyleProps, Label } from './styles'

type Props = TextInputProps & {
  label: string
  size?: InputBoxTypeStyleProps
}

export function Input({ label, size = 'NORMAL', ...props }: Props) {
  return (
    <Container size={size}>
      <Label>{label}</Label>
      <InputBox size={size} {...props} />
    </Container>
  )
}
