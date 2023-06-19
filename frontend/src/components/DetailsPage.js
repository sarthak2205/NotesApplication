import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Sidebar from './Sidebar'
import { useLocation } from 'react-router-dom'

import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai'

const DetailsPage = () => {

    const location = useLocation()

    const [ update, setUpdate ] = useState(false);
    const [ title, setTitle ] = useState("");
    const [ desc, setDesc ] = useState("")
    const [ note, setNote ] = useState({})
    const path = location.pathname.split("/")[2]

    useEffect(() => {
        const getNote = async () => {
            const res = await axios.get('/notes/' + path)
            //console.log(res)
            setNote(res.data)
        }
        getNote()
    })

    const handleDelete = async () => {
        try {
            await axios.delete(`/notes/${note._id}`)
            window.location.replace("/")
        }catch(error){}
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/notes/${note._id}`, { title, desc })
            window.location.reload()
        } catch(error){}
    }

  return (
    <div>
        <div className='flex md:grid md:grid-cols-3'>
            <Sidebar />
            <div className='md:col-span-2 bg-white shadow-md rounded-lg z-1'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='ml-5 mt-7 text-sm md:text-xl'>{new Date(note.createdAt).toDateString().replace(/^\S+\s/,'')}</div>
                    <div className='mr-5 mt-7 text-xl flex flex-row space-x-5'>
                        {update ? <button className='text-white bg-blue-700 font-bold rounded-full px-3 py-1 hover:105 duration-300' onClick={handleUpdate}>Update</button> : <></>}
                        {update ? <></> : <button onClick={() => setUpdate(true)}> <FaEdit className='text-green-600 hover:scale-125 duration-300 cursor-pointer text-xl md:text-3xl'/>  </button>}
                        <button onClick={handleDelete}><AiFillDelete className='text-red-600 hover:scale-125 hover:text-red-800 duration-300 cursor-pointer text-xl md:text-3xl'/></button>
                    </div>
                </div>
                <div className='flex flex-col items-center pt-10 px-10 w-full space-y-10'>
                    <div className='w-full border-b-4 border-solid border-slate-400 py-4 flex justify-center'>
                        {update ? <input className='bg-transparent focus:outline-none focus:border-0 active:ring-0 active:border-0 placeholder:text-3xl placeholder:md:text-6xl text-3xl md:text-6xl placeholder:font-bold text-center font-bold' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={note.title}
                        /> : <h1 className='text-3xl md:text-6xl font-bold '>{note.title}</h1>}
                    </div>
                    <div className='w-full text-base md:text-xl text-left pt-2 md:px-4'>
                       {update ? <textarea className='bg-transparent w-full focus:outline-none focus:border-0 active:ring-0 active:border-0 placeholder:md:text-xl placeholder:text-base' type="text" rows={20} onChange={(e) => setDesc(e.target.value)} placeholder={note.desc} value={desc}
                       /> : <p className='px-2 md:px-4'>{note.desc}</p>}
                    </div>
                    
                </div>
            </div>  
        </div>
    </div>
  )
}

export default DetailsPage