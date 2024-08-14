import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import home from "../assets/SideBar/home.png"
import shorts from "../assets/SideBar/shorts.svg"
import subscription from "../assets/SideBar/subscriptions.png"
import you from "../assets/SideBar/your_videos.png"
import { Link } from 'react-router-dom'

const MainContainer = () => {
  return (
    <div className=' grid grid-flow-col  text-white border-2 border-blue-700 bg-black relative top-16  overflow-hidden'>
        <div className=' col-span-1  hidden md:block'>
          <ul className='w-20  flex flex-col  items-center '>
            <li className='py-4  cursor-pointer hover:bg-[#252727] rounded-xl'><Link className='flex flex-col items-center' to="/"><img className=' mx-5 w-6 h-auto' src={home}></img><p className='text-[10px] py-1 '>Home</p></Link></li>
            <li className='py-4  cursor-pointer hover:bg-[#252727] rounded-xl'><Link className='flex flex-col items-center' to=""><img className=' mx-5 w-6 h-auto' src={shorts}></img><p className='text-[10px] py-1'>Shorts</p></Link></li>
            <li className='py-4  cursor-pointer hover:bg-[#252727] rounded-xl'><Link className='flex flex-col items-center' to=""><img className=' mx-5 w-6 h-auto' src={subscription}></img><p className='text-[10px] py-1'>Subscriptions</p></Link></li>
            <li className='py-4  cursor-pointer hover:bg-[#252727] rounded-xl'><Link className='flex flex-col items-center' to=""><img className=' mx-5 w-6 h-auto' src={you}></img><p className='text-[10px] py-1'>You</p></Link></li>
          </ul>
        </div>
        <div className=' col-span-11  w-full overflow-hidden overflow-y-scroll border-red-800 border-2'>
          <div className='grid '>
            <ButtonList />
            <VideoContainer />
          </div>
        </div>
    </div>
  )
}

export default MainContainer
