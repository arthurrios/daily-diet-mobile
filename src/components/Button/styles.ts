import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'FILL' | 'OUTLINE'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 12px;

  padding: 16px 24px;
  border-radius: 6px;

  background-color: ${({ theme, type }) =>
    type === 'FILL' ? theme.COLORS.GRAY_600 : 'transparent'};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
