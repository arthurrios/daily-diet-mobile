import { Modal } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(Modal)``

export const ModalView = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  padding: 24px;
`

export const ModalBox = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  width: 327px;
  height: 192px;
  justify-content: center;
  align-items: center;
  padding: 40px 24px 24px;
  gap: 32px;
  border-radius: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  text-align: center;
  width: 260px;
`
