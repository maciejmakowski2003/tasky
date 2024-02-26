import {
    CardContent,
  } from "@/components/ui/card"
import TaskCard from "./TaskCard";

interface ITask {
    id: number;
    name: string;
    doItUntil: string;
    done: boolean;
    category: string;
    color: string;
}

interface IProps {
    tasks: ITask[];
}

function Tasks({ tasks }: IProps) {
    return (
        <CardContent className="p-0 px-9 flex flex-wrap flex-row items-center">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </CardContent>
    )
}

export default Tasks