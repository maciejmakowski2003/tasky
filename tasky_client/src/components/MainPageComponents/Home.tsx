import NavBar from './NavBar'
import TaskManager from './TaskManager'

function Home() {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-purple-100 to-purple-900'>
        <NavBar/> 
        <TaskManager/>
    </div>
  )
}

export default Home