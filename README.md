<!-- import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import like from "../assets/singleVideo/like.svg"
import dislike from "../assets/singleVideo/dislike.svg"
// import axios from "axios";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const [singleVideo, setSingleVideo] = useState([]);
  // const [ icon, setIcon ] = useState([]);
  const [channelLogo, setChannelLogo] = useState([]);

  const getSingleVideo = async () => {
    // try{
      // const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=AIzaSyD7Q-LaB3oaKBQg_wB9X12EQXL_NJd6H6A`);
      const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=AIzaSyD7Q-LaB3oaKBQg_wB9X12EQXL_NJd6H6A`);
      const resData = await res.json();
      // console.log(resData);
      // console.log(resData?.items[0]);
      setSingleVideo(resData.items[0]);
      // setIcon(resData.items[0].snippet.channelId);
    // } catch (error) {
    //   console.log(error);
    // }
  }
  useEffect(() => {
    getSingleVideo();
  }, []);

  console.log(singleVideo);


  const getChannelLogo = async () => {
    // const logoOne = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=AIzaSyD7Q-LaB3oaKBQg_wB9X12EQXL_NJd6H6A`);
    // const channelOne = await logoOne.json();
    // console.log(channelOne.items[0].snippet.channelId);
    // setIcon(channelOne.items[0].snippet.channelId);


    const logo = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${singleVideo.snippet.channelId}&key=AIzaSyD7Q-LaB3oaKBQg_wB9X12EQXL_NJd6H6A`)
    const channel = await logo.json();

    // console.log(channel?.items[0]?.snippet?.thumbnails?.default?.url);
    setChannelLogo(channel.items[0].snippet.thumbnails.default);
  }

  useEffect(() => {
    getChannelLogo();
  }, []);

  // console.log(icon);
  console.log(channelLogo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);


  return (
    <div className="text-white col-span-12 flex items-center bg-black">
      <div className="col-span-6 pl-24">
        <iframe
          className="rounded-xl"
          width="640"
          height="360"
          src={"https://www.youtube.com/embed/" + searchParams.get("v") }
          // + ?autoplay=1
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-[630px]">
          <div className="p-2   border-2 border-white text-white font-bold text-xl line-clamp-2">
            {singleVideo?.snippet?.localized?.title}
          </div>
          <div className="flex justify-around py-4 border-2 border-white">
            <div className=" flex border-2 border-white">
              <img className="h-9 w-9 rounded-full" src={channelLogo.url}></img>
                <div>
                  <p className="font-bold border-2 border-white">{singleVideo?.snippet?.channelTitle}</p>
                  <p> </p>
                </div>
            </div>
            <button className="rounded-3xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-opacity-80">Subscribe</button>
            <div className="flex border-2 border-white">
              <button className="py-2 flex  rounded-l-3xl bg-[#252727] font-semibold text-sm"><img className="w-[22px] ml-4 mr-2" src={like}></img> {singleVideo?.statistics?.likeCount}</button>
              <button className="py-2 rounded-r-3xl bg-[#252727] font-semibold text-sm"><img className="w-[22px] mx-4" src={dislike}></img></button>
            </div>
            <button className="py-2 px-6 rounded-3xl bg-[#252727] font-semibold text-sm">Share</button>
          </div>
          <div className="w-[630px] px-4 py-3 rounded-2xl bg-[#252727] border-2 border-white">
            <p className="line-clamp-4">{singleVideo?.snippet?.localized?.description}</p>
          </div>
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

export default WatchPage; -->



# basic structure of our youtube

- Head
- Body
  - Sidebar
    - MenuItems
  - MainContainer
    - ButtonList
    - VideoContainer
      - VideoCard


# How debounsing work
  - Head.js

  const [searchQuery, setSearchQuery] = useState("");
  //   console.log(searchQuery);

  useEffect(() => {
    // API call
    // console.log(searchQuery);

    // make an API call after ever key press
    // but if the difference between 2 API calls is < 200ms
    // decline the API call

    //   searchQuery pass in [] means when this searchQuery data will change than every time the API call

    const timer = setTimeout(() => {
      getSearchSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * steps
   * 
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make api call atfer 200 ms
   *
   * key - ip
   * - destroy the component (useEffect return method)
   * - re-render the component
   * - useEffect();
   * - start timer => make api call after 200ms (this is new timer)
   * 
   * #"if the 200ms passed and no changes apply in search button then below steps do"
   * setTimeout(200) - make an API call
   */

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };



# Cache:
  time complexity to search in array = O(n)
  time complexity to search in Object = O(1)

  O(1) is far far better than O(n)

  array.indexOf()  or  array.include()    time complexity is O(n)

  [i, ip, iph, ipho, iphone]

  {
    i:
    ip:
    iph:
    iphone:
  }

  this is even more optimise
  new map which is even more optimise than searching insight Object
  new Map();








# Live Chat on youtube

  - Challenges :
    - Get Data Live  # Data Layer(DL)
    - Update the UI  # UI Layer(UL)

  # Data (Live)
    - Web Sockets : is a two way connection establish 
                        (no reguler interval)
                    {[UI => Server] or [Server => UI]}
                    (it's kind of like a handshake between the server and UI)
                    (once you have made that connection you can quickly send data from eigther side )
                    ( so it's By Direction Live Data )
                    ex. Trading Apps, WhatsApp, 
    
    - API(Long) Polling : 
                            ( interval )
                          (UI) <= (server)
                          ex. Gmail, Cricbuzz
