import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  border-radius: 8px;
  gap: 4px;
  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`
export const Stats = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`
