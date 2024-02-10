import React, { useEffect, useState } from 'react'
import { YOUTUBE_MOST_POPULAR_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideoList()
  }, []);

  const getVideoList = async () => {
    try {
      const response = await fetch(YOUTUBE_MOST_POPULAR_VIDEO_API);
      const json = await response.json();
      console.log(json);
      setVideos(json.items);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <VideoCard />
    </div>
  )
}

export default VideoContainer