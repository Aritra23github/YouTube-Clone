import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  // console.log(searchParam.get('v'));

  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className='px-5'>
      <iframe 
        className='rounded-lg'
        width={980}
        height={567}
        src={"https://www.youtube.com/embed/" + searchParam.get('v')}
        title='YouTube Video Player'
        frameBorder={0}
        allow='accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture'
        allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default WatchPage