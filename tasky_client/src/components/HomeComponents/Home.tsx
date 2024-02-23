import Chart from './Chart'
import UpcomingTasks from './UpcomingTasks'
import UpcomingEvents from './UpcomingEvents'
import axios from 'axios'
import { useEffect, useState } from 'react'
import API_URL from '@/config'
import { useAuth } from '@/context/AuthContext'

interface ITask {
  id: number;
  name: string;
  doItUntil: string;
  done: boolean;
  category: string;
  color: string;
}

function Home() {
  const {token} = useAuth()
  const [events, setEvents] = useState([])
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

  const chartData ={
    toDo: tasks.filter((task) => !task.done).length,
    done: tasks.filter((task) => task.done).length
  }  

  const upcomingTasks = tasks.filter((task) => !task.done).sort((a,b) => {
    return new Date(a.doItUntil).getTime() - new Date(b.doItUntil).getTime()
  }).slice(0,3)

  return (
    <div className='flex flex-col'>
        <div className='mb-10 mr-10 flex flex-row'>
            <UpcomingTasks upcomingTasks={upcomingTasks}/>
        </div>
        <div className='mr-10 flex flex-row'>
            <div className='mr-10'>
              <UpcomingEvents/>
            </div>
            <Chart chartData={chartData}/>
        </div>
    </div>
  )
}

export default Home