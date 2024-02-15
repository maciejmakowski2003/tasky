import {Card} from "@/components/ui/card"
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Tasks from "./Tasks";
import TaskOptions from "./TaskOptions";
import { useParams } from 'react-router-dom';
import TasksPagination from "./TasksPagination";


function TasksPage() {

    const navigate = useNavigate()
    const { id } = useParams()
    const pageId = id? parseInt(id) : navigate("/error")
    const url = "/" + window.location.pathname.split("/")[1]
    const tasks = [8,8,8,7,6]
    
    useEffect(() => {
        if(!pageId || isNaN(pageId) || pageId>tasks.length || pageId<1) navigate("/error")
    },[pageId, navigate, tasks])

    return (
        <Card className='w-[920px] h-[690px]'>
            <TaskOptions url = {url} />
            <Tasks numberOfTasks={tasks[pageId - 1]}/>
            <TasksPagination url = {url} size = {tasks.length} pageId = {pageId} />
        </Card>        
  )
}

export default TasksPage