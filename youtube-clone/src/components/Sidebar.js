import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>

        <li className='grid grid-flow-col'> 
          <div className='flex col-span-1'>
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: 'none', display: 'block', width: '85%', height: '85%' }} ><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg>
          </div>
          <div className='px-5 col-span-11'>
            Home 
          </div>
        </li>

        <li className='grid grid-flow-col'>
          <div className='flex col-span-1'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block", width: "85%", height: "85%" }}><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg>
          </div>
          <div className='px-5 col-span-11'>
            Shorts 
          </div>
        </li>
        
        {/* <li className='gird grid-flow-col'> 
          <div className='flex col-span-1'>
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block", width: "10%", height: "10%" }}><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>
          </div>
          <div className='flex px-5 col-span-11'>
            Subs
          </div>
        </li> */}

      </ul>

      <h1 className='font-bold pt-5'>You</h1>
      <ul>
        <li> History </li>
        <li> Watch later </li>
        <li> Liked vides </li>
      </ul>

      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li> Trending </li>
        <li> Shopping </li>
        <li> Music </li>
        <li> Movies </li>
        <li> Live </li>
        <li> Gaming </li>
        <li> News </li>
        <li> Sports </li>
        <li> Learning </li>
        <li> Fashion & Beauty </li>
        <li> Podcasts </li>
      </ul>
    </div>
  )
}

export default Sidebar