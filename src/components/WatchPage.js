import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import like from "../assets/singleVideo/like.svg";
import dislike from "../assets/singleVideo/dislike.svg";
import three_dots from "../assets/singleVideo/more_horiz.svg";
import CommentsContainer from "./CommentsContainer";
// import axios from "axios";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const [singleVideo, setSingleVideo] = useState([]);
  // const [ icon, setIcon ] = useState([]);
  const [channelLogo, setChannelLogo] = useState([]);

  const getSingleVideo = async () => {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get(
          "v"
        )}&key=AIzaSyCc7PeUTR0f4B0yDQJOdpGj8oiK36olh4E`
      );
      const resData = await res.json();
      if (resData.items && resData.items.length > 0) {
        setSingleVideo(resData.items[0]);
      } else {
        console.error("No video found");
      }
      // console.log(resData);
      // console.log(resData?.items[0]);
      // setSingleVideo(resData.items[0]);
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };
  useEffect(() => {
    getSingleVideo();
  }, []);

  // console.log(singleVideo);

  const getChannelLogo = async () => {
    try {
      const logo = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${singleVideo?.snippet?.channelId}&key=AIzaSyCc7PeUTR0f4B0yDQJOdpGj8oiK36olh4E`
      );
      const channel = await logo.json();
      if (channel.items && channel.items.length > 0) {
        setChannelLogo(channel.items[0].snippet);
      } else {
        // console.error("No channel items found");
      }

      // console.log(channel?.items[0]?.snippet?.thumbnails?.default?.url);
      // setChannelLogo(channel.items[0].snippet.thumbnails);
    } catch (error) {
      console.error("Error fetching channel logo:", error);
    }
  };

  useEffect(() => {
    if (singleVideo) {
      getChannelLogo();
    }
  }, [singleVideo]);

  // console.log(icon);
  console.log(channelLogo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const description = singleVideo?.snippet?.description || "";
  const formattedDescription = description.replace(/\n/g, "<br>");
  // console.log(formattedDescription);

  return (
    <div className="text-white col-span-12 flex items-center bg-black relative top-20">
      <div className="col-span-6 pl-24">
        {/* videoFrame */}
        <iframe
          className="rounded-xl"
          width="640"
          height="360"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          // + ?autoplay=1
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {/* video details */}
        <div className="w-[630px] ">
          {/* title */}
          <div className="p-2   border-2 border-white text-white font-bold text-xl line-clamp-2">
            {singleVideo?.snippet?.localized?.title}
          </div>
          {/* buttons and channel info */}
          <div className="flex justify-between py-4 border-2 border-white ">
            <div className=" flex border-2 border-white items-center ">
              <div className="flex gap-2 ">
                <img
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src={channelLogo.thumbnails?.default.url}
                ></img>
                <div className="flex flex-col pl-2 w-36 border-red-700 border-2 ">
                  <p className="font-bold cursor-pointer line-clamp-1">
                    {singleVideo?.snippet?.channelTitle}
                  </p>
                  <p className="font-semibold text-[12px] text-gray-400">
                    {" "}
                    subscribers
                  </p>
                </div>
                <button className="rounded-3xl bg-white text-black px-4 py-2 text-sm font-bold hover:bg-opacity-80">
                Subscribe
                </button>
              </div>
            </div>
            <div className="flex  items-center border-2 border-white gap-3">
              <div className="flex items-center">
                <button className="py-2 flex items-center rounded-l-3xl bg-[#252727] font-semibold text-sm hover:bg-[#3e4242]">
                  <img className="w-[22px] mx-3" src={like}></img>{" "}
                  <p className="pr-2 border-r-[1px] border-gray-500">
                    {singleVideo?.statistics?.likeCount}
                  </p>
                </button>
                <button className="py-2  rounded-r-3xl bg-[#252727] font-semibold text-sm hover:bg-[#3e4242]">
                  <img className="w-[22px]  mx-3" src={dislike}></img>
                </button>
              </div>
              <button className="py-2 px-6 rounded-3xl bg-[#252727] font-semibold text-sm hover:bg-[#3e4242]">
                Share
              </button>
              <button className="flex justify-center items-center h-10 w-10 bg-[#252727] rounded-full cursor-pointer hover:bg-[#3e4242]">
                <img className="w-[22px]" src={three_dots}></img>
              </button>
            </div>
          </div>
          {/* video description */}
          <div className="w-[630px] px-4 py-3 rounded-2xl bg-[#252727] border-2 border-white cursor-pointer ">
            <p className="line-clamp-4 font-semibold text-sm"dangerouslySetInnerHTML={{ __html: formattedDescription }}></p>
          </div>
        </div>
        <div>
          <CommentsContainer/>
        </div>
      </div>
      <div className="col-span-6">
        {/* <iframe
          className="rounded-xl"
          width="640"
          height="360"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe> */}
      </div>
    </div>
  );
};

export default WatchPage;
