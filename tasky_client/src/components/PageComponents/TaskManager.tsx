import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Button } from "../ui/button";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";
import { GrTableAdd } from "react-icons/gr";
import { useAuth } from "@/context/AuthContext";

type MenuOptions = {
    [key: string]: ReactNode;
};


function TaskManager() {
    const {logout} = useAuth()

    const menuOptions: MenuOptions = {
        "/": <div className="flex flex-row"><IoHomeOutline size={20} className="mr-5"/>Home</div>,
        "/tasks": <div className="flex flex-row"><MdOutlineTaskAlt size={20} className="mr-5"/>Your tasks</div>,
        "/calendar": <div className="flex flex-row"><IoCalendarNumberOutline size={20} className="mr-5"/>Your calendar</div>,
        "/add-task": <div className="flex flex-row"><MdAddCircleOutline size={20} className="mr-5"/>Add task</div>,
        "/add-event": <div className="flex flex-row"><GrTableAdd size={20} className="mr-5"/>Add event</div>,
    }

    const navigate = useNavigate()

    const pathName = window.location.pathname.split("/")[1]
    const [value, setValue] = useState<string>("/" + pathName)
    if (value == "/tasks-done") {
        setValue("/tasks")
    }

    const handleValueChange = (value: string) => {
        if(value == "") return
        setValue(value)
        if (value === "/tasks") {
            navigate(value + "/1")
            return
        }
        navigate(value)
    }    

    const handleLogOut = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        logout();
        navigate("/login")
    }

    return (
        <Card className="ml-10 w-[200px] h-[690px] flex flex-col justify-between">
            <div>
                <CardHeader>
                    <CardTitle className="flex justify-center">Tasky</CardTitle>
                </CardHeader>
                <CardContent>
                    <ToggleGroup value = {value} onValueChange={handleValueChange} type="single" className="flex flex-col justify-start">                   
                        {Object.keys(menuOptions).map((option) => 
                            <ToggleGroupItem className="data-[state=on]:text-purple-500" key={option} value={option}>
                                {menuOptions[option]}
                            </ToggleGroupItem>)}
                    </ToggleGroup>
                </CardContent>
            </div>
            <Button onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleLogOut(e)} className="hover:bg-purple-700">Log out</Button>                          
        </Card>
    )
}

export default TaskManager