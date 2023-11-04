/* eslint-disable react/no-unescaped-entities */
import { HealthStyleProps } from '@components/Balance/styles'
import { BoldText, Container, Image, Subtitle, Title } from './styles'
import { View } from 'react-native'
import goodFeedbackImg from '@assets/good.png'
import badFeedbackImg from '@assets/bad.png'
import { Button } from '@components/Button'

type Props = {
  type?: HealthStyleProps
}

export function Feedback({ type = 'HEALTHY' }: Props) {
  return (
    <Container>
      {type === 'HEALTHY' ? (
        <>
          <View style={{ gap: 8 }}>
            <Title type="HEALTHY">Keep it up!</Title>
            <Subtitle>
              You're still <BoldText>on diet</BoldText>. Very good!
            </Subtitle>
          </View>
          <Image source={goodFeedbackImg} />
        </>
      ) : (
        <>
          <View style={{ gap: 8 }}>
            <Title type="UNHEALTHY">Too bad!</Title>
            <Subtitle>
              You went <BoldText>outside diet </BoldText>
              this time, but keep it up and don't give up!
            </Subtitle>
          </View>
          <Image source={badFeedbackImg} />
        </>
      )}
      <Button title="Go to home page" style={{ width: 'auto' }} />
    </Container>
  )
}
