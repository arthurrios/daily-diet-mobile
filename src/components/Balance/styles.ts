import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type BalanceStyleProps = 'HEALTHY' | 'UNHEALTHY'

type Props = {
  type: BalanceStyleProps
}
export const Container = styled(TouchableOpacity)<Props>`
  margin-top: 32px;
  margin-bottom: 40px;
  padding: 20px 16px;
  align-items: center;
  border-radius: 8px;
  position: relative;

  background-color: ${({ theme, type }) =>
    type === 'HEALTHY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`
export const Percentage = styled.Text`
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
export const Arrow = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'HEALTHY' ? theme.COLORS.GREEN_800 : theme.COLORS.RED_800,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`
