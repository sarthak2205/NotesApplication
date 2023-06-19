import React from 'react'

//importing necessary icons
import { AiOutlineSearch } from 'react-icons/ai';



const Navbar = () => {
  return (
    <div className='bg-white shadow-md border-b px-4 relative flex justify-center md:justify-between items-center py-4'>
        <div className='flex flex-row justify-center md:justify-around'>
            <h1 className='md:pl-4 font-light font-title text-4xl cursor-pointer'><a href='/'>Notes</a></h1>
        </div>
        {/*<form className='w-1/2'>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 font-bold">
                    <AiOutlineSearch size={24} />
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500" placeholder="Search " required/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
  </form>*/}
        <div className='hidden md:block'></div>
    </div>
  )
}

export default Navbar