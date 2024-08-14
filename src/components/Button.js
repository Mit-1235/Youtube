// import React from "react";
// import { useState } from "react";

// const Button = ({ name }) => {
//   const [active, setActive] = useState("All");
//   // const [toggle, setToggle] = useState(true);

//   const videoByTag = (tag) => {
//     if (active !== tag) {
//       setActive(tag);
//       // setToggle(true);
//     }
//     // alert(tag);
//   };
//   console.log(active);
//   // console.log(toggle);

//   return (
//     <div className="transition-all ease-in-out duration-300">
//       {/* <button onClick={() => {videoByTag(name)}} className={`${active == name ? "bg-white opacity-95 hover:opacity-100 text-black px-4 py-[6px] mx-[6px] whitespace-nowrap text-sm font-medium rounded-lg " : "px-4 py-[6px] mx-[6px] whitespace-nowrap bg-[#252727] text-sm font-medium rounded-lg hover:bg-[#3e4242]"}`}>
//         {name}
//       </button> */}
//       <button
//         onClick={() => {
//           videoByTag(name);
//         }}
//         className={`${
//           active === name
//             ? "bg-white opacity-95 hover:opacity-100 text-black "
//             : "bg-[#252727] hover:bg-[#3e4242]"
//         } px-4 py-[6px] mx-[6px] whitespace-nowrap text-sm font-medium rounded-lg `}
//       >
//         {name}
//       </button>
//     </div>
//   );
// };

// export default Button;
