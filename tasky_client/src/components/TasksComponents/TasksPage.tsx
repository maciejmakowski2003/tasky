import {Card} from "@/components/ui/card"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Tasks from "./Tasks";
import TaskOptions from "./TaskOptions";
import { useParams } from 'react-router-dom';
import TasksPagination from "./TasksPagination";
import axios from "axios";
import API_URL from "@/config";
import { useAuth } from "@/context/AuthContext";

interface ITask {
    id: number;
    name: string;
    doItUntil: string;
    done: boolean;
    category: string;
    color: string;
}


function TasksPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const pageId = id? parseInt(id) : 0
    const url = "/" + window.location.pathname.split("/")[1]
    const {token} = useAuth()
    const [tasks, setTasks] = useState<ITask[]>([])
    
    useEffect(() => {
        axios.get(API_URL + "tasks", {
            headers: {
                "x-access-token": `${token}`
            }
        })
        .then((res) => {
            setTasks(res.data)
        })
        .catch((err) => {
            console.log(err)
        })     
    },[token])

    const tasksToRender = url === "/tasks-done" ? 
    tasks.filter((task) => task.done) : tasks.filter((task) => !task.done)

    if((!pageId || isNaN(pageId) || pageId<1 || pageId>Math.ceil(tasksToRender.length/8)) && pageId != 1) navigate("/error")

    return (
        <Card className='w-[920px] h-[690px]'>
            <TaskOptions url = {url} />
            {tasksToRender.length === 0 ?
            (
                <p className="text-center mt-10">No tasks to show</p>
            ) : (
                <div>
                    <Tasks tasks={tasksToRender.slice((pageId-1)*8,Math.min(pageId*8,tasksToRender.length))} />
                    <TasksPagination url = {url} size = {Math.ceil(tasksToRender.length/8)} pageId = {pageId} />
                </div>
            )}
        </Card>        
  )
}

export default TasksPage