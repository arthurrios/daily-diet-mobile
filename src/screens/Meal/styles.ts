import styled, { css } from 'styled-components/native'
import { HealthStyleProps } from '@components/Balance/styles'
import { ArrowLeft } from 'phosphor-react-native'

type Props = {
  type: HealthStyleProps
}

export const Container = styled.View<Props>`
  position: relative;
  padding-top: 70px;
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'HEALTHY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`

export const Arrow = styled(ArrowLeft).attrs<Props>(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600,
}))`
  position: absolute;
  left: 32px;
`
export const Info = styled.View`
  gap: 24px;
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

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
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
export const StatusContainer = styled.View`
  align-self: flex-start;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  flex-direction: row;
  padding: 8px 16px;
  gap: 8px;
  align-items: center;
  border-radius: 999px;
`

export const Status = styled.View<Props>`
  height: 8px;
  width: 8px;
  border-radius: 999px;
  background-color: ${({ theme, type }) =>
    type === 'HEALTHY' ? theme.COLORS.GREEN_800 : theme.COLORS.RED_800};
`

export const Option = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
