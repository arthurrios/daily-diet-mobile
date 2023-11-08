import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  flex: 1;
  padding: 0 24px;
`

export const ButtonLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  margin-bottom: 8px;
`
export const LinearGradientView = styled(LinearGradient)`
  height: 48px;
  width: 100%;
  z-index: 1;
  position: 'absolute';
  bottom: 0;
`
