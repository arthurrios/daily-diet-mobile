import { Arrow, Container, Main, Percentage, Subtitle, Title } from './styles'
import { Alert, View } from 'react-native'
import { ButtonIcon } from '@components/ButtonIcon'
import { StatsCard } from '@components/StatsCard'
import { HealthStatsCard } from '@components/HealthStatsCard'
import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { mainBalance } from '@storage/stats/mainBalance'
import { healthyStreak } from '@storage/stats/healthyStreak'

export function Stats() {
  const [balance, setBalance] = useState('')
  const [healthy, setHealthy] = useState<boolean>(false)
  const [healthyMeals, setHealthyMeals] = useState<number>(0)
  const [unhealthyMeals, setUnhealthyMeals] = useState<number>(0)
  const [mealsTotalQuantity, setMealsTotalQuantity] = useState<number>(0)
  const [healthyStreakRange, setHealthyStreakRange] = useState<number>(0)

  const navigation = useNavigation()

  function handleGoHome() {
    navigation.goBack()
  }

  async function healthBalanceStats() {
    try {
      const {
        healthBalance,
        healthStatus,
        healthyMealsQuantity,
        unhealthyMealsQuantity,
        mealsTotal,
      } = await mainBalance()

      const healthyStreakLength = await healthyStreak()

      const healthyPercentage = String(
        (healthBalance * 100).toFixed(2),
      ).replace('.', ',')

      setBalance(healthyPercentage)
      setHealthy(healthStatus)
      setHealthyMeals(healthyMealsQuantity)
      setUnhealthyMeals(unhealthyMealsQuantity)
      setMealsTotalQuantity(mealsTotal)
      setHealthyStreakRange(healthyStreakLength)
    } catch (error) {
      console.log(error)
      Alert.alert('Stats', 'Error fetching stats')
    }
  }

  useFocusEffect(
    useCallback(() => {
      healthBalanceStats()
      // clearAllData()
    }, []),
  )

  return (
    <Container type={healthy === true ? 'HEALTHY' : 'UNHEALTHY'}>
      <ButtonIcon
        onPress={() => handleGoHome()}
        icon={<Arrow type={healthy === true ? 'HEALTHY' : 'UNHEALTHY'} />}
      />
      <Percentage>{balance}%</Percentage>
      <Subtitle>of meals within diet</Subtitle>
      <Main
        style={{
          shadowOpacity: 0.05,
          shadowColor: '#000',
          shadowRadius: 30,
        }}
      >
        <Title>General stats</Title>
        <View style={{ gap: 12 }}>
          <StatsCard
            stats={healthyStreakRange}
            subtitle="best dish sequence within diet"
          />
          <StatsCard stats={mealsTotalQuantity} subtitle="meals registered" />
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <HealthStatsCard
              stats={healthyMeals}
              subtitle="meals within diet"
              type="HEALTHY"
            />
            <HealthStatsCard
              stats={unhealthyMeals}
              subtitle="meals outside diet"
              type="UNHEALTHY"
            />
          </View>
        </View>
      </Main>
    </Container>
  )
}
