import React from 'react'

const SearchVideo = ({ results, loading }) => {


  return (
    <div className='bg-black h-screen border-2 border-red-950'>
        <h1 className="text-white font-bold text-6xl">hello</h1>
        {/* <p>{results}</p> */}
        {/* {results.map((video) => (
        <div key={video.id.videoId}>
          <h3>{video.snippet.title}</h3>
          <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
        </div>
      ))} */}
    </div>
  )
}

export default SearchVideo
