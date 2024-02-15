import React, { useEffect, useState } from 'react'
import { YOUTUBE_MOST_POPULAR_VIDEO_API } from '../utils/constants';
import VideoCard, { AdVideoContainer } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideoList()
  }, []);

  const getVideoList = async () => {
    try {
      const response = await fetch(YOUTUBE_MOST_POPULAR_VIDEO_API);
      const json = await response.json();
      // console.log(json);
      setVideos(json.items);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex flex-wrap'>
      { videos.length > 0 && <AdVideoContainer info={videos[0]} /> }
      {
        videos.map((video) => {
          return (
            <Link key={video.id} to={'/watch?v='+video.id}>
              <VideoCard  info={video}/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default VideoContainer