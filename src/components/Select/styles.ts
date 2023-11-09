import { HealthStyleProps } from '@components/Balance/styles'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type SelectTypeStyleProps = {
  type: HealthStyleProps
  isSelected?: boolean
}

export const Container = styled(TouchableOpacity)<SelectTypeStyleProps>`
  flex: 1;
  height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;

  ${({ theme, type, isSelected }) =>
    isSelected
      ? css`
          background-color: ${type === 'HEALTHY'
            ? theme.COLORS.GREEN_100
            : theme.COLORS.RED_100};
          border: 1px solid
            ${type === 'HEALTHY'
              ? theme.COLORS.GREEN_800
              : theme.COLORS.RED_800};
        `
      : css`
          background-color: ${theme.COLORS.GRAY_200};
        `}
`

export const Status = styled.View<SelectTypeStyleProps>`
  height: 8px;
  width: 8px;
  border-radius: 999px;
  background-color: ${({ theme, type }) =>
    type === 'HEALTHY' ? theme.COLORS.GREEN_800 : theme.COLORS.RED_800};
`

export const Option = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
