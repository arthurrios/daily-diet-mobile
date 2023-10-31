/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import theme from '@theme'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import { Loading } from '@components/Loading'
import { Routes } from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
