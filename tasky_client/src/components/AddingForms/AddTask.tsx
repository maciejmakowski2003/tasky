import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TextArea } from '@react-ui-org/react-ui';
import { Label } from "@/components/ui/label"
import { useState } from "react";
import DatePicker from "./DatePicker";
import { format } from "date-fns"
import Combobox from "./ComboBox";
import './addingform.css'
import { useAuth } from "@/context/AuthContext";
import ErrorAlert from "../Alerts/ErrorAlert";
import axios from "axios";
import API_URL from "../../config"
import { useNavigate } from "react-router";

interface ComboboxProps {
    categories: {id: number, name: string, color: string, userID: number } []
}

function AddTask({categories}: ComboboxProps) {
    const {token} = useAuth()
    const [category, setCategory] = useState<string>("")
    const [task, setTask] = useState<string>("")
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [error, setError] = useState<string>("")
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!category || !task || !date) {
            setError("Please fill all the fields.")
            return
        }

        const fd = new FormData()
        fd.append("categoryName", category)
        fd.append("taskName", task)
        fd.append("date", format(date, "yyyy-MM-dd"))

        axios.post(API_URL + "add-task", fd, {
            headers: {
                "x-access-token": `${token}`,
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            setError("")
            console.log(res.data)
            navigate('/tasks/1')
        })
        .catch((err) => {
            setError(err.response.data.message)
        });        
    }

    return (
        <div className="ml-500">
            <Card className="w-[400px]">
                {error && <ErrorAlert message={error} /> }
                <CardHeader className="flex justify-center items-center">
                        <CardTitle>Add your next task</CardTitle>        
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full justify-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="category">Category</Label>
                                <Combobox categories={categories} category={category} setCategory={setCategory} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="task">Task</Label>
                                <div className="">
                                    <TextArea id="task" placeholder=" Your task" cols={45} rows={4} maxLength="150" 
                                    onChange = {(e:React.ChangeEvent<HTMLTextAreaElement>) => setTask(e.target.value)} />
                                </div>
                                <CardDescription className="text-xs flex flex-row justify-between">
                                    <div>You can use maximum 150 characters.</div>
                                    <div className="text-bold">{task.length}</div>
                                </CardDescription>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="date">Do it until date:</Label>
                                <DatePicker date={date} setDate={setDate} />
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

export default AddTask