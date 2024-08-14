import React from "react";

const Comment = ({ data }) => {

  // console.log(data);
  // const { authorProfileImageUrl, authorDisplayName, textOriginal } = data?.snippet?.topLevelComment?.snippet;
  // console.log(authorProfileImageUrl);


  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="flex px-3 py-3">
          <img className='w-12 h-12 rounded-full cursor-pointer' src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}></img>
            <div className='px-4'>
              <p className='font-bold text-sm cursor-pointer'>{item?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
              <p className='text-sm'>{item?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
