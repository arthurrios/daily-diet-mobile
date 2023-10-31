import 'styled-components/native'
import theme from '@theme/index'

declare module 'styled-components/native' {
  type ThemeType = typeof theme

  export type DefaultTheme = ThemeType
}
