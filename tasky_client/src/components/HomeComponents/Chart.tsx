import DonutChart from 'react-donut-chart'; 
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface IChart {
  toDo: number;
  done: number;
}

function Chart({chartData}: {chartData: IChart}) {
  const data = [
    {
      label: 'Done',
      value: chartData.done,
    },
    {
      label: 'To Do',
      value: chartData.toDo,
    }
  ]
  return (
    <Card className='w-[300px] h-[350px]'>
      <CardHeader>
        <CardTitle className='flex justify-center'>Tasks progress</CardTitle>
      </CardHeader>
      <CardContent className='flex justify-center'>
        <DonutChart data={data} legend={false} clickToggle={false} colors={['green','yellow']} height={200} width={200}/>
      </CardContent>
    </Card>
  )
}

export default Chart