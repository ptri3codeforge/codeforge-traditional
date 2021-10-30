import React from "react";
import BulletinBoard from "../Components/BulletinBoard";
import SearchBar from "../Components/SearchBar";

const BoardContainer = () => {

    return (
        <div className='flex flex-col h-full  w-1/2'>
                <div className='row-start-1 bg-white row-start-1 row-span-{3} relative rounded-r-3xl'>
            <h1 className="flex items-center justify-center text-xl font-bold h-20 bg-yellow-default">BULLETIN BOARD </h1>
            
                <div className="flex items-center justify-center h-20 w-full bg-white">
                 <SearchBar />
                </div>

            <div className='flex items-center text-lg font-medium sticky top-0 bg-white mr-5 w-full'></div>
            <BulletinBoard />
            <BulletinBoard />
            <BulletinBoard />
            <BulletinBoard />
            </div>
        </div>
        
    )
};

export default BoardContainer;