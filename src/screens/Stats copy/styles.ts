import styled, { css } from 'styled-components/native'
import { HealthStyleProps } from '@components/Balance/styles'
import { ArrowLeft } from 'phosphor-react-native'

type Props = {
  type: HealthStyleProps
}

export const Container = styled.View<Props>`
  position: relative;
  padding-top: 60px;
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'HEALTHY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`

export const Balance = styled.View<Props>`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === 'HEALTHY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`

export const Arrow = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'HEALTHY' ? theme.COLORS.GREEN_800 : theme.COLORS.RED_800,
}))`
  position: absolute;
  left: 32px;
`

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-top: 24px;
  text-align: center;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  text-align: center;
  padding-bottom: 40px;
`
export const Main = styled.View`
  padding: 33px 24px 0;
  flex: 1;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  text-align: center;
  margin-bottom: 23px;
`
