import styled, { css } from 'styled-components/native'
import { HealthStyleProps } from '@components/Balance/styles'
import { Text, TouchableOpacity } from 'react-native'

type Props = {
  type: HealthStyleProps
}

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 14px 12px;
  gap: 12px;
  justify-content: space-between;
  border-radius: 6px;
`
export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`
export const Line = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`
export const Title = styled(Text).attrs({
  numberOfLines: 1,
})`
  width: 217px;
  flex-shrink: 1;
  flex-wrap: wrap;
`

export const Status = styled.View<Props>`
  height: 14px;
  width: 14px;
  border-radius: 999px;
  background-color: ${({ theme, type }) =>
    type === 'HEALTHY' ? theme.COLORS.GREEN_200 : theme.COLORS.RED_200};
`
