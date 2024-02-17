import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

function UpcomingEvents() {
  return (
    <Card className='w-[300px] h-[350px]'>
      <CardHeader>
        <CardTitle className='flex justify-center'>Upcoming events:</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center'>
          <p>incoming events will be displayed here</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default UpcomingEvents