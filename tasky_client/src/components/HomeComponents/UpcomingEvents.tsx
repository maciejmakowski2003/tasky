import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import EventCard from "../CalendarComponents/EventCard";

interface IEvent {
  id: number;
  name: string;
  from: string;
  to: string;
  useID: number;
}

interface IUpcomingEvents {
  upcomingEvents: IEvent[];
}

function UpcomingEvents({upcomingEvents}: IUpcomingEvents) {
  return (
    <Card className='w-[400px] h-auto'>
      <CardHeader>
        <CardTitle className='flex justify-center'>Upcoming events:</CardTitle>
      </CardHeader>
      <CardContent>
        {upcomingEvents ? (
          <div className="flex flex-col gap-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className='flex justify-center'>
            <p>No upcoming events ;((</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default UpcomingEvents