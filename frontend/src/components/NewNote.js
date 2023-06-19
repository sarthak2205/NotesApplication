import axios from 'axios'
import React, { useState } from 'react'

const NewNote = () => {

    const [ title, setTitle ] = useState('')
    const [ desc, setDesc ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newNote = { 
            title, 
            desc,
        }
        try {
            const res = await axios.post("/notes", newNote)
            window.location.replace("/note/" + res.data._id)
        } catch(error) {}
    }

  return (
    <div className='flex flex-col space-y-10 justify-center items-center'>
        <form onSubmit={handleSubmit}>
            <button 
                className='absolute right-10 mt-5 text-xl md:text-2xl font-bold text-blue-600 cursor-pointer hover:scale-105 duration-500 hover:text-blue-800'
            >
                Done
            </button>
            <div className='flex flex-col justify-center items-center pt-10 pr-8 md:px-10 w-full space-y-10'>
                <div className='w-full border-b-4 border-solid border-slate-400 py-4 flex justify-center'>
                    <input 
                        placeholder='Title'
                        className='bg-transparent text-4xl md:text-6xl text-center active:ring-0 active:border-0 focus:border-0 focus:outline-none w-full font-bold'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='w-full'>
                    <textarea 
                        placeholder='Enter the notes here'
                        className='bg-transparent text-xl text-left w-full pt-2 px-2 md:px-4 active:ring-0 active:border-0 focus:border-0 focus:outline-none'
                        rows={20}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
            </div>
        </form>
        
    </div>
    
  )
}

export default NewNote