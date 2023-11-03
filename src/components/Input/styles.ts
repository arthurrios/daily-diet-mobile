import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export type InputBoxTypeStyleProps = 'NORMAL' | 'TEXTAREA'

type Props = {
  size: InputBoxTypeStyleProps
}

export const Container = styled.View<Props>`
  flex: 1;
  width: 100%;
  ${({ size }) => css`
    min-height: ${size === 'TEXTAREA' ? '142px' : '70px'};
  `}
`

export const InputBox = styled(TextInput)<Props>`
  width: 100%;

  flex: 1;
  border-radius: 6px;
  padding: 14px;
  ${({ theme, size }) => css`
    border: 1px solid ${theme.COLORS.GRAY_300};
    min-height: ${size === 'TEXTAREA' ? '120px' : '48px'};
    max-height: ${size === 'TEXTAREA' ? '120px' : '48px'};
    color: ${theme.COLORS.GRAY_700};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  margin-bottom: 4px;
`
