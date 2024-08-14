import React, { useEffect, useState } from "react";
import { json, useSearchParams } from "react-router-dom";
import Comment from "./Comment";

const CommentsContainer = () => {
  const [searchParams] = useSearchParams();
  const [feedBack, setFeedBack] = useState([]);

  const getComment = async () => {
      const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${searchParams.get("v")}&key=AIzaSyCc7PeUTR0f4B0yDQJOdpGj8oiK36olh4E`);
      const json = await data.json();

      console.log(json?.items[0]?.snippet);
      setFeedBack(json.items);
      console.log(json.items);
  }

  useEffect(() => {
      getComment();
  },[]);

//   const commentsData = [
//     {
//       name: "mit kalathiya",
//       text: "Lorem ispum dolor sit amet, cancsoosa",
//       replies: [],
//     },
//     {
//       name: "mit kalathiya",
//       text: "Lorem ispum dolor sit amet, cancsoosa",
//       replies: [
//         {
//           name: "mit kalathiya",
//           text: "Lorem ispum dolor sit amet, cancsoosa",
//           replies: [],
//         },
//         {
//           name: "mit kalathiya",
//           text: "Lorem ispum dolor sit amet, cancsoosa",
//           replies: [
//             {
//               name: "mit kalathiya",
//               text: "Lorem ispum dolor sit amet, cancsoosa",
//               replies: [
//                 {
//                   name: "mit kalathiya",
//                   text: "Lorem ispum dolor sit amet, cancsoosa",
//                   replies: [
//                     {
//                       name: "mit kalathiya",
//                       text: "Lorem ispum dolor sit amet, cancsoosa",
//                       replies: [],
//                     },
//                   ],
//                 },
//               ],
//             },
//             {
//               name: "mit kalathiya",
//               text: "Lorem ispum dolor sit amet, cancsoosa",
//               replies: [],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "mit kalathiya",
//       text: "Lorem ispum dolor sit amet, cancsoosa",
//       replies: [],
//     },
//     {
//       name: "mit kalathiya",
//       text: "Lorem ispum dolor sit amet, cancsoosa",
//       replies: [],
//     },
//   ];

//   const Comment = ({ data }) => {
//     const { name, text, replies } = data;
//     return (
//       <div>
//         <div className="flex bg-gray-800">
//           <div className="w-10 h-10 rounded-full bg-white"></div>
//           <div>
//             <p>{name}</p>
//             <p>{text}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const CommentsList = ({ comments }) => {
//     // Disclaimer : Don't use indexes as keys
//     return comments.map((comment, index) => (
//       <div key={index}>
//         <Comment data={comment} />
//         <div className="ml-5 border-2 border-l-red-800 ">
//             <CommentsList comments={comment.replies}/>
//         </div>
//       </div>
//     ));
//   };

  return (
    <div className="w-[630px] border-2 border-white">
      {/* <p className="font-bold text-2xl pt-5 pb-4">Comments</p> */}
      {/* <CommentsList comments={commentsData} /> */}
      {/* <Comment data={commentsData[0]} /> */}
      <p className="font-bold text-2xl pt-5 pb-4">{feedBack.length} Comments</p>
            <Comment key={feedBack.index} data={feedBack}/>
    </div>
  );
};

export default CommentsContainer;
