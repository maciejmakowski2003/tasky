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

function AddTask() {
    const [category, setCategory] = useState<string>("")
    const [task, setTask] = useState<string>("")
    const [date, setDate] = useState<Date | undefined>(undefined);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!category || !task || !date) {
            alert("Please fill all the fields.")
            return
        }
        console.log(category, task, format(date, "PPP" ))
    }

    return (
        <div className="ml-500">
            <Card className="w-[400px]">
            <CardHeader className="flex justify-center items-center">
                    <CardTitle>Add your next task</CardTitle>        
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full justify-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="category">Category</Label>
                            <Combobox category={category} setCategory={setCategory} />
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