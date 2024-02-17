import Chart from './Chart'
import RecentlyAdded from './RecentlyAdded'
import UpcomingEvents from './UpcomingEvents'

function Home() {
  return (
    <div className='flex flex-col'>
        <div className='mb-10 flex flex-row'>
            <div className='mr-10'>
                <RecentlyAdded/>
            </div>
            <Chart/>
        </div>
        <UpcomingEvents/>
    </div>
  )
}

export default Home