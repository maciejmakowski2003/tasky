import {CardHeader} from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ReactNode, useState} from "react";
import { useNavigate } from "react-router";

type Options = {
    [key: string]: ReactNode;
};

interface TaskOptionsProps {
    url: string;
}

function TaskOptions({ url }: TaskOptionsProps) {
    const navigate = useNavigate()

    const menuOptions: Options = {
        "/tasks": "To do",
        "/tasks-done": "Done",
    }

    const [value, setValue] = useState<string>(url)

    const handleValueChange = (value: string) => {
        if(value == "") return        
        setValue(value)
        navigate(value + "/1")
    }

    return (
        <CardHeader className="flex items-center mb-5">
            <ToggleGroup value={value} onValueChange={handleValueChange} type="single" className="w-fit flex flex-row border-2 rounded-lg border-black bg-white">
                {Object.keys(menuOptions).map((option) => 
                    <ToggleGroupItem className="data-[state=on]:text-purple-500" key={option} value={option}>
                        {menuOptions[option]}
                    </ToggleGroupItem>)}
            </ToggleGroup>
        </CardHeader>
    )
}

export default TaskOptions