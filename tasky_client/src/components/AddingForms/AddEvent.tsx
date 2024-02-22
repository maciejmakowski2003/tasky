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
import axios from "axios"
import API_URL from "../../config"
import ErrorAlert from "../Alerts/ErrorAlert";
import { useAuth } from "@/context/AuthContext";

function AddEvent() {
    const [name, setName] = useState<string>("")
    const [date, setDate] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined})
    const [error, setError] = useState<string>("")
    const {token} = useAuth()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!name || !date || !date.from || !date.to) {
            setError("Please fill all the fields.")
            return
        }
        
        const fd = new FormData()
        fd.append("eventName", name)
        fd.append("from", format(date.from, "yyyy-MM-dd"))
        fd.append("to", format(date.to, "yyyy-MM-dd"))

        axios.post(API_URL + "add-event", fd, {
            headers: {
                "x-access-token": `${token}`,
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            setError("")
            console.log(res.data)
            window.location.reload()
        })
        .catch((err) => {
            setError(err.response.data.message)
        });
    }

    return (
        <div className="ml-500">
            <Card className="w-[400px]">
                {error && <ErrorAlert message={error} />}
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