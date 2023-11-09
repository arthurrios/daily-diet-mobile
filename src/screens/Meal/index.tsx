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
  Header,
} from './styles'
import { ButtonIcon } from '@components/ButtonIcon'
import { Alert, View } from 'react-native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { Button } from '@components/Button'
import { useTheme } from 'styled-components/native'
import { useCallback, useState } from 'react'
import { Modal } from '@components/Modal'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { formatStorageDate } from '@utils/formatStorageDate'
import { formatTimeToUS } from '@utils/formatTimeToUS'
import { mealsGetAll } from '@storage/meal/mealsGetAll'
import { AppError } from '@utils/AppError'
import { mealDelete } from '@storage/meal/mealDelete'

type RouteParams = {
  foodItem: MealStorageDTO
}

export function Meal() {
  const [modalVisible, setModalVisible] = useState(false)

  const navigation = useNavigation()
  const route = useRoute()
  const { foodItem } = route.params as RouteParams

  const { COLORS, FONT_SIZE } = useTheme()

  function handleGoBack() {
    navigation.navigate('home')
  }

  function handleEditMeal(foodItem: MealStorageDTO) {
    navigation.navigate('editMeal', { foodItem })
  }

  async function handleDelete(id: string) {
    try {
      await mealDelete(id)

      navigation.navigate('home')
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Delete Meal', error.message)
      } else {
        Alert.alert('Delete Meal', 'It was not possible to delete meal.')
      }
    }
  }

  return (
    <Container
      edges={{ bottom: 'off', top: 'maximum' }}
      type={foodItem.healthy ? 'HEALTHY' : 'UNHEALTHY'}
    >
      <Header>
        <ButtonIcon
          icon={<Arrow type={foodItem.healthy ? 'HEALTHY' : 'UNHEALTHY'} />}
          onPress={handleGoBack}
        />
        <Title>Meal</Title>
      </Header>
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
        <Button
          type="FILL"
          title="Delete"
          style={{ flex: 1 }}
          onPress={() => handleDelete(foodItem.id)}
        />
      </Modal>

      <Main
        edges={{ top: 'off', bottom: 'maximum' }}
        style={{
          shadowOpacity: 0.05,
          shadowColor: '#000',
          shadowRadius: 30,
        }}
      >
        <Info>
          <View>
            <Title style={{ textAlign: 'left', marginBottom: 8 }}>
              {foodItem.name}
            </Title>
            <Description>{foodItem.description}</Description>
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
            <Description>
              {formatStorageDate(foodItem.date)} at{' '}
              {formatTimeToUS(foodItem.time)}
            </Description>
          </View>
          <StatusContainer>
            <Status
              type={foodItem.healthy === true ? 'HEALTHY' : 'UNHEALTHY'}
            />
            <Option>
              {foodItem.healthy === true ? 'on diet' : 'outside diet'}
            </Option>
          </StatusContainer>
        </Info>
        <View style={{ gap: 9 }}>
          <Button
            type="FILL"
            title="Edit meal"
            icon={<PencilSimpleLine color={COLORS.WHITE} />}
            onPress={() => handleEditMeal(foodItem)}
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
