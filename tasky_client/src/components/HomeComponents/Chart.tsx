import DonutChart from 'react-donut-chart'; 
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Chart() {
  const data = [
    {
      label: 'Done',
      value: 30,
    },
    {
      label: 'To Do',
      value: 20,
    }
  ]
  return (
    <Card className='w-[300px] h-[300px]'>
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