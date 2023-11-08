import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: 32px;
  gap: 8px;
`

export const Date = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`
