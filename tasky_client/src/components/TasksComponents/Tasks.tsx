import {
    CardContent,
  } from "@/components/ui/card"
import TaskCard from "./TaskCard";

interface TasksProps {
    numberOfTasks: number;
}

function Tasks({ numberOfTasks }: TasksProps) {
    return (
        <CardContent className="p-0 px-9 flex flex-wrap flex-row items-center">
            {Array.from({ length: numberOfTasks }, (_, index) => (
                <TaskCard key={index} />
            ))}
        </CardContent>
    )
}

export default Tasks