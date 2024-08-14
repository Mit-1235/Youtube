import React, { useState } from "react";
import Button from "./Button";

// 1:29:54

const list = [
  "All",
  "Trailers",
  "Music",
  "Cricket Batting Stroke",
  "Dramedy",
  "Law of attraction",
  "Mantras",
  "Superhero Movies",
  "Web Development",
  "Skills",
  "Application software",
  "Display devices",
  "Horoscopes",
  "Gadgets",
  "Fast food",
  "Consciousness",
  "Data structures",
  "Indian cuisine",
  "Recently uploaded",
  "Watched"
];

const ButtonList = () => {

  const [active, setActive] = useState("All");

    const videoByTag = (tag) => {
    if (active !== tag) {
      setActive(tag);
    }
    // alert(tag);
    };
    console.log(active);

  return (
    <div className="flex py-3 no-scrollbar bg-black text-white  overflow-hidden overflow-x-scroll border-2 border-red-600 ">
      {list.map((data, index) => (
        // <Button  key={index} name={data} />
        <button key={index}
        onClick={() => {
          videoByTag(data);
        }}
        className={`${
          active === data
            ? "bg-white opacity-95 hover:opacity-100 text-black "
            : "bg-[#252727] hover:bg-[#3e4242]"
        } px-4 py-[6px] mx-[6px] whitespace-nowrap text-sm font-medium rounded-lg transition-all ease-in-out duration-300`}
      >
        {data}
      </button>
      ))}
    </div>
  );
};

export default ButtonList;
