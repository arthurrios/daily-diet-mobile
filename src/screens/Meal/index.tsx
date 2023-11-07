import {
  Arrow,
  Container,
  Info,
  Main,
  Title,
  Description,
  Status,
  StatusContainer,
  Option,
} from './styles'
import { ButtonIcon } from '@components/ButtonIcon'
import { HealthStyleProps } from '@components/Balance/styles'
import { View } from 'react-native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { Button } from '@components/Button'
import { useTheme } from 'styled-components/native'
import { useState } from 'react'
import { Modal } from '@components/Modal'

type Props = {
  type?: HealthStyleProps
}

export function Meal({ type = 'UNHEALTHY' }: Props) {
  const [modalVisible, setModalVisible] = useState(true)

  const { COLORS, FONT_SIZE } = useTheme()

  return (
    <Container type={type}>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        key={null}
        type={''}
        props={undefined}
        title="Do you really want to delete this meal?"
      >
        <Button
          type="OUTLINE"
          title="Cancel"
          style={{ flex: 1 }}
          onPress={() => setModalVisible(!modalVisible)}
        />
        <Button type="FILL" title="Delete" style={{ flex: 1 }} />
      </Modal>
      <ButtonIcon icon={<Arrow type={type} />} />
      <Title>Meal</Title>
      <Main
        style={{
          shadowOpacity: 0.05,
          shadowColor: '#000',
          shadowRadius: 30,
        }}
      >
        <Info>
          <View>
            <Title style={{ textAlign: 'left', marginBottom: 8 }}>
              X-Burger
            </Title>
            <Description>Bacon burger with onion rings and mayo</Description>
          </View>
          <View>
            <Title
              style={{
                textAlign: 'left',
                fontSize: FONT_SIZE.SM,
                marginBottom: 8,
              }}
            >
              Date and time
            </Title>
            <Description>11/06/2023 at 4:00pm</Description>
          </View>
          <StatusContainer>
            <Status type={type} />
            <Option>{type === 'HEALTHY' ? 'on diet' : 'outside diet'}</Option>
          </StatusContainer>
        </Info>
        <View style={{ gap: 9 }}>
          <Button
            type="FILL"
            title="Edit meal"
            icon={<PencilSimpleLine color={COLORS.WHITE} />}
          />
          <Button
            type="OUTLINE"
            title="Delete meal"
            icon={<Trash color={COLORS.GRAY_700} />}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </Main>
    </Container>
  )
}
