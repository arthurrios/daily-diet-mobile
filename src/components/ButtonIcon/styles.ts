import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  height: 24px;
  width: 24px;

  justify-content: center;
  align-items: center;

  position: absolute;
  left: 32px;
  z-index: 1;
`
