import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ReactNode } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";

type MenuOptions = {
    [key: string]: ReactNode;
};


function TaskManager() {

    const menuOptions: MenuOptions = {
        "/": <div className="flex flex-row"><IoHomeOutline size={20} className="mr-5"/>Home</div>,
        "/tasks": <div className="flex flex-row"><MdOutlineTaskAlt size={20} className="mr-5"/>Your tasks</div>,
        "/calendar": <div className="flex flex-row"><IoCalendarNumberOutline size={20} className="mr-5"/>Your calendar</div>,
        "/add-task": <div className="flex flex-row"><MdAddCircleOutline size={20} className="mr-5"/>Add task</div>,
    }

    return (
        <Card className=" ml-5 w-[200px] h-[400px] ">
            <CardHeader>
                <CardTitle className="flex justify-center">Tasky</CardTitle>
            </CardHeader>
            <CardContent>
                <ToggleGroup defaultValue="/" type="single" className="flex flex-col justify-start">
                    {Object.keys(menuOptions).map((option) => 
                        <ToggleGroupItem className="data-[state=on]:text-purple-500" key={option} value={option}>
                            {menuOptions[option]}
                        </ToggleGroupItem>)}
                </ToggleGroup>
            </CardContent>
        </Card>
    )
}

export default TaskManager