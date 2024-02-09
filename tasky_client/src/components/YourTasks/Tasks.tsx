import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ReactNode } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import TaskCard from "./TaskCard";

type Options = {
    [key: string]: ReactNode;
};

function Tasks() {
    const menuOptions: Options = {
        "/tasks": "To do",
        "/tasks/done": "Done",
    }

    const navigate = useNavigate()

    const [value, setValue] = useState<string>(window.location.pathname)

    const handleValueChange = (value: string) => {
        if(value == "") return
        setValue(value)
        navigate(value)
    }


    return (
        <Card className='w-[920px] h-[690px]'>
            <CardHeader className="flex items-center mb-5">
                <ToggleGroup value={value} onValueChange={handleValueChange} type="single" className="w-fit flex flex-row border-2 rounded-lg border-black bg-white">
                    {Object.keys(menuOptions).map((option) => 
                        <ToggleGroupItem className="data-[state=on]:text-purple-500" key={option} value={option}>
                            {menuOptions[option]}
                        </ToggleGroupItem>)}
                </ToggleGroup>
            </CardHeader>
            <CardContent className="p-0 px-9 flex flex-wrap flex-row items-center">
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </CardContent>
        </Card>
    )
}

export default Tasks