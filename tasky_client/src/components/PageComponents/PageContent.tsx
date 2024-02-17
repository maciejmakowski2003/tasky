import TaskManager from './TaskManager'
import { ReactNode } from 'react'

function PageContent({ children }: { children: ReactNode }) {
  return (
    <div className='mb-5 flex flex-row'>
      <div className='mr-10'>
        <TaskManager />
      </div>
      {children}
    </div>
  )
}

export default PageContent