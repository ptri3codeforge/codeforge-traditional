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

      <div className="w-full h-4/5 bg-yellow-default rounded-lg m-8 ">
      
      <div className="rounded-lg bg-yellow-default flex flex-wrap content-evenly ">
      {BulletinData.map((el, i) => (
         <div className={`flex ${clicked ? `bg-yellow-default text-white-default` : `bg-white-default`}  border-8 m-2 border-white-default rounded-lg  cursor-pointer shadow-lg w-full hover:bg-white-default`} 
         key={i}
         // onClick={() => isClicked(true)}
         >
         <div className="flex  rounded-3xl hover:bg-blue-light bg-white-cream w-full px-20 py-2  hover:text-white-default">
            <img className="w-12 h-12 rounded-full object-cover mt-1 mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
            
            <div className=" w-full">
               <div className="flex relative">
                  <h2 className="text-med">{el.author}</h2>   
               </div>
               <small className="text-xs ">22h ago {/*how long since  post*/}</small>
      

               <p className= " mt-1 font-medium text-2xl text-center ">
                  {/* {el.subject} */}
                  THE TITLE OF THE POST
               </p>
      
               <div className= "flex justify-between  mt-2 mb-2 flex items-center">
                  <div className="flex mr-10 text-gray-700 text-sm">
                     <svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor" onClick={() => {setLikeCount(likeCount + 1)}}>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                     <span>{likeCount}</span>
                  </div>
                  <div className="flex mr-2 text-gray-700 text-sm mr-8">
                     <span>#React</span>
                  </div>
               </div>
            </div>
            
         </div>
         
      </div>
      ))}
         </div>
      </div>
    )
}

export default BulletinBoard
