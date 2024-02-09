import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

function RecentlyAdded() {
  return (
    <Card className='w-[600px] h-[300px]'>
      <CardHeader>
        <CardTitle className='flex justify-center'>Recently added tasks:</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center'>
          <p>Recently added content will be displayed here</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default RecentlyAdded