import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import YourCalendar from "./YourCalendar"
import {useState} from "react"
import { format } from "date-fns"

function CalendarPage() {
    const [date, setDate] = useState<Date | undefined>(undefined)

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
                {date && (
                    <CardHeader>
                        <CardTitle>{format(date,"PPP")}</CardTitle>
                    </CardHeader>
                )}
                <CardContent>
                    {date && (
                        <div>
                            <p>event 1</p>
                            <p>event 1</p>
                            <p>event 1</p>
                            <p>event 1</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default CalendarPage