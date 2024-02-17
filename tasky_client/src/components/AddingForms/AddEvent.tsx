import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import DateRangePicker from "./DateRangePicker"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"
import './addingform.css'

function AddEvent() {
    const [name, setName] = useState<string>("")
    const [date, setDate] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined})

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!name || !date || !date.from || !date.to) {
            alert("Please fill all the fields.")
            return
        }
        console.log(name, format(date.from, "PPP"), format(date.to, "PPP"))
    }

    return (
        <div className="ml-500">
            <Card className="w-[400px]">
            <CardHeader className="flex justify-center items-center">
                    <CardTitle>Add your next event</CardTitle>        
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full justify-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Name" maxLength={30} 
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="date">Date range:</Label>
                            <DateRangePicker setDate={setDate} date={date} />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center flex-wrap">
                <Button className="w-[400px] hover:bg-purple-700" 
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleClick(e)}>Add
                </Button>
            </CardFooter>
            </Card>
        </div>
      )
}

export default AddEvent