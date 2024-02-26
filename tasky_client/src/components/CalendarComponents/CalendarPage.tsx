import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import YourCalendar from "./YourCalendar"
import {useState, useEffect} from "react"
import { format } from "date-fns"
import { useAuth } from "@/context/AuthContext"
import axios from "axios"
import API_URL from "@/config"
import EventCard from "./EventCard"

interface IEvent {
    id: number;
    name: string;
    from: string;
    to: string;
    useID: number;
}

const includeDate = (date: Date, from: string, to: string) => {
    const fromDate = new Date(new Date(from).setHours(0,0,0,0))
    const toDate = new Date(new Date(to).setHours(0,0,0,0))
    return date >= fromDate && date <= toDate
}
 

function CalendarPage() {
    const { token } = useAuth();
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [events, setEvents] = useState<IEvent[]>([])
    const [filteredEvents, setFilteredEvents] = useState<IEvent[]>([])
    
    useEffect(() => {
        axios.get(API_URL + "events", {
            headers: {
                "x-access-token": `${token}`
              }
        })
        .then((res) => {
            setEvents(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[token])

    useEffect(() => {
        if (date) {
            const eventsToRender = events.filter((event) => {
                return includeDate(date, event.from, event.to)
            })
            setFilteredEvents(eventsToRender)
        }
    }, [date])

    return (
        <div className="flex flex-row gap-5">
            <Card className="w-[400px] h-fit flex flex-col items-center">
                <CardHeader>
                    <CardTitle>Your Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                    <YourCalendar date={date} setDate={setDate} />
                </CardContent>
            </Card>

            <Card className="w-[400px] h-fit flex flex-col items-center">
                { !date && (
                    <CardHeader>
                        <CardTitle>No date selected</CardTitle>
                    </CardHeader>
                )
                }
                {date && events && (
                    <div>
                        <CardHeader>
                            <CardTitle>{format(date,"PPP")}</CardTitle>
                        </CardHeader>
                        <CardContent>
                                <div className="flex flex-col gap-3">
                                    {filteredEvents.map((event) => (
                                        <EventCard key={event.id} event={event} />
                                    ))}
                                </div>
                        </CardContent>
                    </div>
                )}
                { date && !events && (
                    <CardHeader>
                        <CardTitle>No events on that day ;((</CardTitle>
                    </CardHeader>
                )}
            </Card>
        </div>
    )
}

export default CalendarPage