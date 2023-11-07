import styled, { css } from 'styled-components/native'
// import { HealthStyleProps } from '@components/Balance/styles'
import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled.View`
  position: relative;
  padding-top: 70px;
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
`

export const Arrow = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600,
}))`
  position: absolute;
`
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}

  text-align: center;
  margin-bottom: 26px;
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
  padding: 40px 24px;
  flex: 1;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  justify-content: space-between;
`

export const Form = styled.View`
  gap: 24px;
`
export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  margin-bottom: 4px;
`
