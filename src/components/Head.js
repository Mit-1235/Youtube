// import React, { useEffect, useState } from "react";
// import menu from "../assets/Hamburger_menu.png";
// import youtube_logo from "../assets/YouTube_dark_logo.png";
// import Search_logo from "../assets/Search_logo.png";
// import Noti_logo from "../assets/Notifiation.png";
// import Create_video from "../assets/Create_video.png";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleMenu } from "../utils/appSlice";
// import { Link } from "react-router-dom";
// import { YOUTUBE_SEARCH_API } from "../utils/contants";
// import { cacheResults } from "../utils/searchSlice";
// import SearchVideo from "./SearchVideo";

// const Head = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [searchResult, setSearchResult] = useState([]);
//   // console.log(searchQuery);
//   const [loading, setLoading] = useState(false);

//   const searchCache = useSelector((store) => store.search);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // API call
//     // console.log(searchQuery);

//     const timer = setTimeout(() => {
//       if (searchCache[searchQuery]) {
//         setSuggestions(searchCache[searchQuery]);
//       } else {
//         getSearchSuggestion();
//       }
//     }, 200);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [searchQuery]);

//   const getSearchSuggestion = async () => {
//     // console.log(searchQuery);
//     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
//     const json = await data.json();
//     // console.log(json[1]);
//     setSuggestions(json[1]);

//     // update cache
//     dispatch(
//       cacheResults({
//         [searchQuery]: json[1],
//       })
//     );
//   };

//   const toggleMenuHandler = () => {
//     dispatch(toggleMenu());
//   };


//   const searchAnyThing = async () => {
//     setLoading(true);
//     setSearchResult([]);
//     console.log(searchQuery);
//     const newData = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&type=video&key=AIzaSyCc7PeUTR0f4B0yDQJOdpGj8oiK36olh4E`)
//     const newSearchData = await newData.json();
//     setSearchResult(newSearchData?.items || []);
//     setLoading(false);
//     // console.log(newSearchData);
//     console.log(searchResult);
//     console.log(searchQuery);

//   }
  
  
//   const handleSearch = () => {
//     console.log(searchQuery);
//     // if(searchQuery.length > 0){
//       searchAnyThing();
//     // }
//   };

//   const handleKeyDown = (event) => {
//     // console.log(searchQuery);
//     if(event.key === "Enter") {
//       // if(searchQuery.length > 0){
//         handleSearch();
//       // }
//     }
//   }

  

//   return (
//     <div className="grid grid-flow-col justify-items-center items-center text-white w-full fixed top-0 z-10 bg-black border-2 border-red-800  ">
//       <div className="flex items-center col-span-1">
//         <div
//           onClick={() => toggleMenuHandler()}
//           className="w-10 h-10 hidden md:flex justify-center items-center rounded-full hover:bg-[#252727] "
//         >
//           <img className="w-7 h-7 cursor-pointer" src={menu} alt="menu"></img>
//         </div>
//         <img
//           className="w-36 h-auto cursor-pointer"
//           src={youtube_logo}
//           alt="web_logo"
//         ></img>
//         {/* <img className='w-36 h-auto cursor-pointer' src={youtube_logo} alt='web_logo'></img> */}
//       </div>
//       <div className=" col-span-10 hidden md:block">
//         <div className="flex items-center">
//           <input
//             className="h-10 bg-black px-5 py-2 border-[1px] border-[#333333] rounded-s-full md:w-[280px] lg:w-[550px] focus:border-[#0000b3] outline-none"
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onFocus={() => setShowSuggestions(true)}
//             onBlur={() => setShowSuggestions(false)}
//             onKeyDown={handleKeyDown}
//           ></input>
//           <button onClick={handleSearch} className="h-10 w-16 flex justify-center items-center bg-[#252727] border-[1px] border-[#333333] rounded-e-full">
//             <img className="w-6 h-6" src={Search_logo} alt="searchbtn"></img>
//           </button>
//           <div className="text-white hidden">
//             <SearchVideo results={searchResult} loading={loading} />
//           </div>
//         </div>
//         {showSuggestions && (
//           <div className="absolute bg-[#252727] w-[550px] my-1 rounded-xl ">
//             <ul className="">
//               {suggestions.map((s) => (
//                 <li
//                   key={s}
//                   className="pt-[6px] pb-[6px] px-5 font-bold hover:bg-[#3e4242]"
//                 >
//                   {s}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//       <div className="flex items-center col-span-1 ">
//         <div className="hidden w-10 h-10 mx-2 md:flex justify-center items-center rounded-full hover:bg-[#252727] ">
//           <img
//             className="w-6 h-6 cursor-pointer"
//             src={Create_video}
//             alt="create_video_logo"
//           ></img>
//         </div>
//         <div className="w-10 h-10 mx-2 flex justify-center items-center rounded-full hover:bg-[#252727]">
//           <img
//             className="w-7 h-7 cursor-pointer"
//             src={Noti_logo}
//             alt="notification_logo"
//           ></img>
//         </div>
//         <div className=" md:hidden">
//           <img className="w-7 h-7" src={Search_logo} alt="searchbtn"></img>
//         </div>
//         {/* <img className='w-8 h-8 mx-1 rounded-full' alt='User'></img> */}
//         <div className="w-9 h-9 mx-3 rounded-full bg-blue-900 cursor-pointer hidden md:block"></div>
//       </div>
            
//     </div>
//   );
// };

// export default Head;


import React, { useEffect, useState } from "react";
import menu from "../assets/Hamburger_menu.png";
import youtube_logo from "../assets/YouTube_dark_logo.png";
import Search_logo from "../assets/Search_logo.png";
import Noti_logo from "../assets/Notifiation.png";
import Create_video from "../assets/Create_video.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";
import SearchVideo from "./SearchVideo";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeQuery, setActiveQuery] = useState(""); // Track the query for which results are being fetched

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const searchAnyThing = async (query) => {
    setLoading(true);
    setSearchResult([]);
    setActiveQuery(query);

    try {
      const newData = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCc7PeUTR0f4B0yDQJOdpGj8oiK36olh4E`
      );
      const newSearchData = await newData.json();

      // Check if the query for which the data was fetched matches the current query
      if (query === activeQuery) {
        setSearchResult(newSearchData.items || []);
      }
      setLoading(false);
      console.log(searchResult);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    searchAnyThing(searchQuery);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className=" grid grid-flow-col grid-cols-3 sm:grid-cols-4  md:grid-cols-12  justify-items-center content-center items-center text-white w-full h-16 z-10 fixed top-0 bg-black border-2 border-red-800">
        {/* <div className="grid col-span-3 gap-3"> */}
          <div className=" grid grid-flow-col items-center   md:col-span-3  ">
          <div
            onClick={() => toggleMenuHandler()}
            className="w-10 h-10 hidden md:grid justify-center items-center rounded-full hover:bg-[#252727]"
          >
            <img className="w-7 h-7 hidden md:grid cursor-pointer" src={menu} alt="menu"></img>
          </div>
          <img
            className="w-36 h-auto cursor-pointer"
            src={youtube_logo}
            alt="web_logo"
          ></img>
          </div>
        {/* </div> */}
        <div className=" col-span-6 hidden md:block">
          <div className="grid grid-flow-col items-center">
            <input
              className="h-10 bg-black px-5 py-2 border-[1px] border-[#333333] rounded-s-full md:w-[280px] lg:w-[550px] focus:border-[#0000b3] outline-none"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              onKeyDown={handleKeyDown}
            ></input>
            <button
              onClick={handleSearch}
              className="h-10 w-16 flex justify-center items-center bg-[#252727] border-[1px] border-[#333333] rounded-e-full"
            >
              <img className="w-6 h-6" src={Search_logo} alt="searchbtn"></img>
            </button>
          </div>
          {showSuggestions && (
            <div className="absolute bg-[#252727] w-[550px] my-1 rounded-xl">
              <ul className="">
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="pt-[6px] pb-[6px] px-5 font-bold hover:bg-[#3e4242]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* <div className=" col-span-3 items-center  "> */}
          <div className="grid grid-flow-col items-center col-start-3 sm:col-start-4 md:col-span-3 ">
          <div className="hidden w-10 h-10 mx-2 md:flex justify-center items-center rounded-full hover:bg-[#252727]">
            <img
              className="w-6 h-6 cursor-pointer "
              src={Create_video}
              alt="create_video_logo"
            ></img>
          </div>
          <div className="w-10 h-10 mx-2 flex justify-center items-center rounded-full hover:bg-[#252727]">
            <img
              className=" w-6 h-6 sm:w-7 sm:h-7 cursor-pointer"
              src={Noti_logo}
              alt="notification_logo"
            ></img>
          </div>
          <div className=" md:hidden">
            <img className="w-6 h-6 sm:w-7 sm:h-7" src={Search_logo} alt="searchbtn"></img>
          </div>
          <div className="w-9 h-9 mx-3 rounded-full bg-blue-900 cursor-pointer hidden md:block"></div>
          </div>
        {/* </div> */}
      </div>

      {/* Render Search Results below the header */}
      <div className="pt-16 hidden">
        <SearchVideo results={searchResult} loading={loading} />
      </div>
    </>
  );
};

export default Head;

