import React, { ReactElement } from 'react'
import { Container, ModalBox, ModalView, Title } from './styles'
import { ModalProps, View } from 'react-native'

type Props = ModalProps &
  ReactElement & {
    title?: string
  }

export function Modal({ title, children, ...props }: Props) {
  return (
    <Container animationType="fade" transparent={true} {...props}>
      <ModalView>
        <ModalBox>
          <Title>{title}</Title>
          <View style={{ flexDirection: 'row', gap: 12 }}>{children}</View>
        </ModalBox>
      </ModalView>
    </Container>
  )
}
