import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";


const Card = () => {
  return (
    <>
     <div className="ml-3 mt-2 card relative p-3 h-72 w-52 bg-zinc-500 rounded-md text-white">
     <FaFileAlt/>
    < p className='mt-4 leading-tight' >Lorem ipsum dolor squas facere vel hic aliquid impedit quod beatae porro.</p>
    <div className="footer rounded-md absolute bottom-0 w-full py-3 px-8 left-0">
        <div className="flex gap-2 items-center justify-between mb-4">
            <h5 className='text-xl' >md.</h5>
            <  MdDownloading  size={30}  />
        </div>
    </div>
     </div>
    </>
    
  )
}

export default Card