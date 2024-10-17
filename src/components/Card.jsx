import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

const Card = ({ data }) => {
  return (
    <>
      <div className="ml-3 mt-2 card relative p-3 h-72 w-52 bg-zinc-500 rounded-md text-white">
        <FaFileAlt />
        <p className='mt-4 leading-tight'>{data.decs}</p>
        <div className="footer rounded-md absolute bottom-0 w-full py-3 px-8 left-0">
          <div className="flex gap-2 items-center justify-between mb-4">
            <h5 className='text-xl'>{data.filesize}</h5>
            {data.close ? <IoMdCloseCircle size={30} /> : <MdDownloading size={30} />}
          </div>
          {data.tag.isOpen && (
            <div
              className="font-bold ml-3 text-[1.2vw]"
              style={{ color: data.tag.textcolor }}  
            >
              {data.tag.tagTitle}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Card;
