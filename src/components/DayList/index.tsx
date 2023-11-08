import { FoodItem } from '@components/FoodItem'
import { Container, Date } from './styles'

type Props = {
  date: string
}

export function DayList({ date }: Props) {
  return (
    <Container>
      <Date>{date}</Date>
      {/* <FoodItem title="X-Burger" time="20:00" type="UNHEALTHY" />
      <FoodItem title="Whey protein with milk" time="16:00" type="HEALTHY" />
      <FoodItem
        title="Caeser salad with chicken fingers by the side"
        time="12:30"
        type="HEALTHY"
      />
      <FoodItem title="Banana shake with whey" time="09:30" type="HEALTHY" /> */}
    </Container>
  )
}
