import React from 'react'
import home from "../assets/SideBar/home.png";
import shorts from "../assets/SideBar/shorts.svg"
import subscription from "../assets/SideBar/subscriptions.png"
import channel from "../assets/SideBar/user-channel.svg"
import history from "../assets/SideBar/history.png"
import playlist from "../assets/SideBar/playlist.png"
import your_video from "../assets/SideBar/your_videos.png"
import later from "../assets/SideBar/watch_later.svg"
import like from "../assets/SideBar/liked_videos.png"
import trending from "../assets/SideBar/trending.png"
import shopping from "../assets/SideBar/shopping.png"
import music from "../assets/SideBar/music.png"
import films from "../assets/SideBar/films.png"
import live from "../assets/SideBar/live.svg"
import game from "../assets/SideBar/gaming.png"
import news from "../assets/SideBar/news.png"
import sport from "../assets/SideBar/sport.png"
import courses from "../assets/SideBar/courses.png"
import fashion from "../assets/SideBar/fashion_beauty.png"
import podcast from "../assets/SideBar/podcasts.png"
import y_premium from "../assets/SideBar/youtube_premium.svg"
import y_studio from "../assets/SideBar/youtube_studio.svg"
import y_music from "../assets/SideBar/youtube_music.svg"
import y_kids from "../assets/SideBar/youtube_kids.svg"
import setting from "../assets/SideBar/settings.png"
import report from "../assets/SideBar/report.png"
import help from "../assets/SideBar/help.png"
import feedback from "../assets/SideBar/feedback.png"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // This type of coding is know as "Early Return" Pattern
  if(isMenuOpen) return null;

  // You can also do this
  // return !isMenuOpen ? null : (

  return (
    <div className=' absolute top-20 z-20 p-3  bg-black text-white w-60 h-[85.6vh] overflow-hidden overflow-y-scroll '>
      <ul className='cursor-pointer mb-4 font-semibold text-[14.4px]'>
        <li className=' py-[8px] rounded-xl hover:bg-[#252727]'><Link className='flex items-center' to="/"><img className='w-[26px] h-[26px] ml-3' src={home} alt="img"></img><p className='ml-5'>Home</p></Link></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[26px] h-[26px] ml-3' src={shorts} alt="img"></img><p className='ml-5'>Shorts</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[25px] h-[25px] ml-3' src={subscription} alt="img"></img><p className='ml-5'>Subscriptions</p></li>
      </ul>
      <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
      <p className='mt-4 ml-3 font-semibold text-base'>You</p>
      <ul className='cursor-pointer mt-3 mb-4 font-medium text-gray-300 text-[14.4px]'>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[26px] h-[26px] ml-3' src={channel} alt="img"></img><p className='ml-5'>Your channel</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[26px] h-[26px] ml-3' src={history} alt="img"></img><p className='ml-5'>History</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[26px] h-[26px] ml-3' src={playlist} alt="img"></img><p className='ml-5'>Playlists</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[26px] h-[26px] ml-3' src={your_video} alt="img"></img><p className='ml-5'>Your videos</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[26px] h-[26px] ml-3' src={later} alt="img"></img><p className='ml-5'>Watch Later</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={like} alt="img"></img><p className='ml-5'>Liked videos</p></li>
      </ul>
      <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
      <p className='mt-4 ml-3 font-semibold text-base'>Subscriptions</p>
      <ul className='cursor-pointer mt-3 mb-4 font-medium text-gray-300 text-[14.4px]'>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><div className='w-8 h-8 ml-3 bg-gray-800 rounded-full'></div><p className='ml-5'>Channel Name</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><div className='w-8 h-8 ml-3 bg-gray-800 rounded-full'></div><p className='ml-5'>Channel Name</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><div className='w-8 h-8 ml-3 bg-gray-800 rounded-full'></div><p className='ml-5'>Channel Name</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><div className='w-8 h-8 ml-3 bg-gray-800 rounded-full'></div><p className='ml-5'>Channel Name</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><div className='w-8 h-8 ml-3 bg-gray-800 rounded-full'></div><p className='ml-5'>Channel Name</p></li>
      </ul>
      <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
      <p className='mt-4 ml-3 font-semibold text-base'>Explore</p>
      <ul className='cursor-pointer mt-3 mb-4 font-medium text-gray-300 text-[14.4px]'>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={trending} alt="img"></img><p className='ml-5'>Trending</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={shopping} alt="img"></img><p className='ml-5'>Shopping</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={music} alt="img"></img><p className='ml-5'>Music</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={films} alt="img"></img><p className='ml-5'>Films</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={live} alt="img"></img><p className='ml-5'>Live</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={game} alt="img"></img><p className='ml-5'>Gaming</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={news} alt="img"></img><p className='ml-5'>News</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={sport} alt="img"></img><p className='ml-5'>Sport</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={courses} alt="img"></img><p className='ml-5'>Courses</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={fashion} alt="img"></img><p className='ml-5'>Fashion & beauty</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={podcast} alt="img"></img><p className='ml-5'>Podcasts</p></li>
      </ul>
      <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
      <p className='mt-4 ml-3 font-semibold text-base'>More From YouTube</p>
      <ul className='cursor-pointer mt-3 mb-4 font-medium text-gray-300 text-[14.4px]'>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={y_premium} alt="img"></img><p className='ml-5'>YouTube Premium</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={y_studio} alt="img"></img><p className='ml-5'>YouTube Studio</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={y_music} alt="img"></img><p className='ml-5'>YouTube Music</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={y_kids} alt="img"></img><p className='ml-5'>YouTube Kids</p></li>
      </ul>
      <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
      <ul className='cursor-pointer my-4 font-medium text-gray-300 text-[14.4px]'>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={setting} alt="img"></img><p className='ml-5'>Settings</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={report} alt="img"></img><p className='ml-5'>Report history</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={help} alt="img"></img><p className='ml-5'>Help</p></li>
        <li className='flex items-center py-[8px] rounded-xl hover:bg-[#252727]'><img className='w-[24px] h-[24px] ml-3' src={feedback} alt="img"></img><p className='ml-5'>Send feedback</p></li>
      </ul>
      <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
      <ul className='font-semibold text-[13px] ml-2'>
        <li className='text-gray-300 my-3'>About Press Copyright<br></br>Contact us Creator Advertise<br></br>Developers</li>
        <li className='text-gray-300 mb-3'>Terms Privacy Policy & Safety<br></br>How YouTube works<br></br>Test new features</li>
        <li><p className='text-gray-500'>2024 Google LLC</p></li>
      </ul>
    </div>
  )
}

export default Sidebar
