import React, {useState, useContext} from 'react'
import { BulletinData } from '../util/BulletinData'

const BulletinBoard = () => {
    const [clicked, isClicked] = useState(false);
    const [likeCount, setLikeCount] = useState(0)
    const handleBoardClick = (e:any) => {
        e.preventDefault()
        isClicked(true);
        console.log('clicked')
    }

    return (
            // <div>
            //     <div classNameName='mr-5 p-5 shadow-sm'>
            //     <h1 classNameName='block text-lg font-medium'>Subject</h1> 
            //     <div>
            //     <p classNameName='block m-0 text-m'>Description</p>
            //     </div>
            //     </div>
            // </div>
<>
{BulletinData.map((el, i) => (
<div className={`flex ${clicked ? `bg-yellow-default text-white-default` : `bg-white-default`} cursor-pointer shadow-lg w-full hover:bg-yellow-default`} 
key={i}
// onClick={() => isClicked(true)}
>
   <div className="flex items-start px-20 py-2  hover:text-white-default">
      <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
      <div className="">
         <div className="flex relative items-center justify-between ">
            <h2 className="text-med relative text-gray-900 -mt-1">{el.author}</h2>
         <div className="relative">
         <small className="text-sm text-gray-700 right-full">22h ago</small>
         </div>
            
         </div>

         
         <p className= "mt-1 text-gray-700 font-semibold text-lg">
            {el.subject}
         </p>
         <div className= "mt-4 flex items-center">
            <div className="flex mr-2 text-gray-700 text-sm mr-3">
               <svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor" onClick={() => {setLikeCount(likeCount + 1)}}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
               <span>{likeCount}</span>
            </div>
            {/* <div className="flex mr-2 text-gray-700 text-sm mr-8">
               <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
               </svg>
               <span>8</span>
            </div> */}
            {/* <div className="flex mr-2 text-gray-700 text-sm mr-4">
               <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                </svg>
               <span>share</span>
            </div> */}
         </div>
      </div>
   </div>
</div>
))}
</>
    )
}

export default BulletinBoard
