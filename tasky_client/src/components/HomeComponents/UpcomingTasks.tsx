import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import TaskCard from "../TasksComponents/TaskCard";

interface ITask {
  id: number;
  name: string;
  doItUntil: string;
  done: boolean;
  category: string;
  color: string;
}

interface IUpcomingTasks {
  upcomingTasks: ITask[];
}

function UpcomingTasks({upcomingTasks}: IUpcomingTasks) {
  return (
    <Card className='w-[650px] h-[300px]'>
      <CardHeader>
        <CardTitle className='flex justify-center'>Upcoming tasks:</CardTitle>
      </CardHeader>
      <CardContent className="ml-2 p-0">
        <div className='className="p-0 flex flex-wrap flex-row items-center"'>
          {upcomingTasks.length > 0 ? upcomingTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          )) : <p>No upcoming tasks</p>}
        </div>
      </CardContent>
    </Card>
  )
}

export default UpcomingTasks