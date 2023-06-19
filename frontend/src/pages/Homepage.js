import React from 'react'
import Sidebar from '../components/Sidebar'
import NewNote from '../components/NewNote'

const Homepage = () => {
  return (
    <div className='bg-slate-200 w-full'>
        <div className='w-full flex flex-row md:grid grid-cols-3'>
            <Sidebar />
            <div className='w-full md:col-span-2'><NewNote /></div>
        </div>
    </div>
  )
}

export default Homepage