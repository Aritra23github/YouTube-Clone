import React from 'react'

const VideoCard = ({ info }) => {
    // console.log('p:',info);
    const { snippet, statistics } = info;
    const { thumbnails, channelTitle, title } = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg cursor-pointer'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export const AdVideoContainer = ({info}) => {
  return (
    <div className='p-1 m-1 border border-red-900'>
      <VideoCard info={info}/>
      <span>Ad Content</span>
    </div>
  )
}

export default VideoCard