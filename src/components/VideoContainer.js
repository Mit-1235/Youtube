import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../utils/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  // const {video, category} = useSelector((store) => store.app);

  // const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    // videoByCategory();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // dispatch(setHomeVideo(json.items))
    // console.log(json);
    setVideos(json.items);
  };

  // const videoByCategory = async () => {
  //   const dataCategory = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${"vlogs"}&type=video&key=AIzaSyCc7PeUTR0f4B0yDQJOdpGj8oiK36olh4E`)
  //   const jsonCategory = await dataCategory.json();
  //   console.log(jsonCategory);
  // }

  return (
    <div className=" grid m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-3   border-2 border-red-700 px-2 bg-black ">
      {videos.map((video) => (
        <Link key={ video.id } to={ "/watch?v=" + video.id }>
          <VideoCard  info={ video } />
        </Link>
      ))}
      {/* <VideoCard info={videos[0]} /> */}
    </div>
  );
};

export default VideoContainer;

