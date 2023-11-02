import styled, { css } from 'styled-components/native'

export type CardTypeStyleProps = 'HEALTHY' | 'UNHEALTHY'

type Props = {
  type: CardTypeStyleProps
}
export const Container = styled.View<Props>`
  align-items: center;
  border-radius: 8px;
  height: 107px;
  gap: 4px;
  padding: 16px;
  flex: 1;

  background-color: ${({ theme, type }) =>
    type === 'HEALTHY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
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
