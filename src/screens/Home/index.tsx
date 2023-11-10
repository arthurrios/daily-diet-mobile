import { Header } from '@components/Header'
import { ButtonLabel, Container } from './styles'
import { Balance } from '@components/Balance'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'
import { DayList } from '@components/DayList'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { mealsGetAll } from '@storage/meal/mealsGetAll'
import { formatMomentDate } from '@utils/timeFormat/formatMomentDate'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import { mainBalance } from '@storage/stats/mainBalance'

export function Home() {
  const [dates, setDates] = useState<string[]>([])
  const [balance, setBalance] = useState('')
  const [healthy, setHealthy] = useState<boolean>()

  const navigation = useNavigation()

  function handleAddMeal() {
    navigation.navigate('addMeal')
  }

  function handleStats() {
    navigation.navigate('stats')
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll()

      const groupByDate = Array.from(new Set(data.flatMap((meal) => meal.date)))

      const formattedDates = groupByDate.map((date) => formatMomentDate(date))

      setDates(formattedDates)
    } catch (error) {
      console.log(error)
      Alert.alert('Meals', 'Error fetching meals')
    }
  }

  async function healthBalanceStats() {
    try {
      const { healthBalance, healthStatus } = await mainBalance()

      const healthyPercentage = String(
        (healthBalance * 100).toFixed(2),
      ).replace('.', ',')
      setBalance(healthyPercentage)
      setHealthy(healthStatus)
    } catch (error) {
      console.log(error)
      Alert.alert('Stats', 'Error fetching stats')
    }
  }

  // Clear Storage:
  // async function clearAllData() {
  //   AsyncStorage.getAllKeys()
  //     .then((keys) => AsyncStorage.multiRemove(keys))
  //     .then(() => alert('success'))
  // }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
      healthBalanceStats()
      // clearAllData()
    }, []),
  )

  return (
    <>
      <Container edges={{ bottom: 'off', top: 'maximum' }}>
        <Header />

        <Balance
          percentage={balance}
          type={healthy === true ? 'HEALTHY' : 'UNHEALTHY'}
          onPress={() => handleStats()}
        />

        <ButtonLabel>Refeições</ButtonLabel>
        <Button
          title="New meal"
          icon={<Plus size={18} color="#FFF" />}
          onPress={handleAddMeal}
        />

        <FlatList
          keyExtractor={(item) => item}
          data={dates.sort((a, b) => b.localeCompare(a))}
          style={{ marginTop: 32 }}
          renderItem={({ item }) => <DayList date={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Container>
      {/* <LinearGradientView
        colors={[COLORS.GRAY_100, 'transparent']}
        end={{ x: 1, y: 1 }}
      /> */}
    </>
  )
}
