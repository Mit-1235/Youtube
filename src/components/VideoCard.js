import React from 'react'
import { useState, useEffect } from 'react';

// 2:01:46

const VideoCard = ({info}) => {
    // console.log(info);
    const[channelLogo, setChannelLogo] = useState([]);

    const getChannelLogo = async () => {
      const logo = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${info.snippet.channelId}&key=AIzaSyCc7PeUTR0f4B0yDQJOdpGj8oiK36olh4E`);
      const channel = await logo.json();
  
      // console.log(channel?.items[0]?.snippet?.thumbnails?.default?.url);
      setChannelLogo(channel?.items[0]?.snippet?.thumbnails);
    }
  
    useEffect(() => {
      getChannelLogo();
    }, []);

    // console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='px-1 py-2  border-2 border-red-800 text-white   '>
      <img className='rounded-xl hover:rounded-none transition-all ease-in-out duration-200 object-cover h-[208px] w-[370px]' src={thumbnails.medium.url} alt='thumbnails'></img>
      <div className='flex  py-3'>
        <div className='h-12 w-12'>
          <img className='h-9 w-9 rounded-full' src={channelLogo?.default?.url} alt='channelLogo'></img>
        </div>
        <div className='w-[280px]'>
          <ul>
            <li className='font-semibold w-[280px] text-[15px] line-clamp-2'>{title}</li>
            <li className='font-semibold text-gray-400 text-[13px]'>{channelTitle}</li>
            <li className='font-medium text-gray-400 text-[13px]'>{statistics.viewCount} views</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VideoCard;
