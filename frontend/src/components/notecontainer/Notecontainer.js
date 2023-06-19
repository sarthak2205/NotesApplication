import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineArrowLeft } from 'react-icons/ai'


const Notecontainer = ({ notes }) => {

    const [ isOpen, setOpen] = useState(false)

    useEffect(() => {
        //console.log(notes)
    })

    const formattedCreatedAt = (createdAt) => {
        const now = new Date();
        const createdDate = new Date(createdAt);

        if (createdDate.toDateString() === now.toDateString()) {
            // The createdAt date is today
            return createdDate.toLocaleTimeString();
        } else if (
            createdDate.toDateString() ===
            new Date(now.getTime() - 24 * 60 * 60 * 1000).toDateString()
        ) {
            // The createdAt date is yesterday
            return "Yesterday";
        } else {
            // The createdAt date is before yesterday
            return createdDate.toLocaleDateString();
        }
    }

  return (
    <div className='min-h-screen'>
        <div className='hidden md:flex flex-col-reverse w-full px-6 bg-white border-r border-r-3 border-slate-400'>
            {notes.map((item, index) => (
                <Link to={`/notes/${item._id}`} key={index+1}>
                    <div className='flex flex-col text-left border-b-2 w-full pt-5 pb-5 cursor-pointer hover:scale-105 duration-300' key={index+1} >
                        <h1 className='font-bold text-base md:text-xl '>{item.title.slice(0,50)}</h1>
                        <p className='truncate pt-5 text-slate-700'>{item.desc}</p>
                        <span className='text-slate-500 font-extralight'>
                            {formattedCreatedAt(item.createdAt)}
                        </span>
                    </div>
                </Link>    
            ))}
        </div>
        <div className='md:hidden flex '>
            <div className={`h-screen bg-white relative duration-700 ${isOpen ? 'w-full' : 'w-8'}`}>
                <button className={`absolute top-10 ${isOpen ? 'left-40 rotate-180' : 'left-10 -translate-x-10'} rounded-full p-2 bg-indigo-600 text-white border-8 border-white font-bold duration-700 transition-all cursor-pointer`} onClick={()=> setOpen(!isOpen)}>
                    <AiOutlineArrowLeft 
                        size={28}
                    />
                </button>
                <div className='px-6 flex flex-col-reverse'>
                {notes.map((item, index) => (
                <Link to={`/notes/${item._id}`} key={index+1}>
                    <div className='flex flex-col text-left border-b-2 w-full pt-5 pb-5 cursor-pointer hover:scale-105 duration-300 overflow-hidden' key={index+1} >
                        <h1 className='font-bold text-base md:text-xl overflow-hidden truncate'>{item.title.slice(0,50)}</h1>
                        <p className='truncate pt-5 text-slate-700'>{item.desc}</p>
                        <span className='text-slate-500 font-extralight'>
                            {formattedCreatedAt(item.createdAt)}
                        </span>
                    </div>
                </Link>    
                ))}
                </div>
            </div>  
        </div>
    </div>
    
  )
}

export default Notecontainer