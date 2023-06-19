import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Notecontainer from './notecontainer/Notecontainer'
import MobileSidebar from './MobileSidebar'

const Sidebar = () => {

    const [ notes, setNotes ] = useState([])

    useEffect(() => {
        const fetchNote = async () => {
            const res = await axios.get("/notes")
            setNotes(res.data)
        }
        fetchNote();
    })

  return (
    <div className='w-48 md:w-full min-h-screen z-99'>
        <div className=''>
          <Notecontainer notes={notes} />
        </div>
    </div>
  )
}

export default Sidebar