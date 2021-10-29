import React from "react";
import BulletinBoard from "../Components/BulletinBoard";
import SearchBar from "../Components/SearchBar";

const BoardContainer = () => {

    return (
        <div className='flex flex-col h-full rounded-r-3xl w-7/12 bg-yellow-default'>
                <div className='row-start-1 bg-white row-start-1 row-span-{3}  relative'>
            
           
                <div className="flex items-center justify-center h-20 shadow-md">
                 <SearchBar />
                </div>

            <div className='flex items-center p-8 text-lg font-medium sticky top-0'></div>
            <h1>BULLETIN BOARD </h1>
            <BulletinBoard />
            <BulletinBoard />
            <BulletinBoard />
            <BulletinBoard />
            </div>
        </div>
        
    )
};

export default BoardContainer;