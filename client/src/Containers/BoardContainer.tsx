import React from "react";
import BulletinBoard from "../Components/BulletinBoard";
import SearchBar from "../Components/SearchBar";

const BoardContainer = () => {

    return (
        <div className='flex flex-col h-full rounded-r-3xl w-1/4 bg-yellow-default'>
                <div className='row-start-1 bg-white row-start-1 row-span-{3} overflow-y-scroll relative'>
            <div className='flex flex-col'>
                <SearchBar />
                <div className='flex items-center p-8 text-lg font-medium sticky top-0'>Bulletin Board</div>
            <BulletinBoard />
            <BulletinBoard />
            <BulletinBoard />
            <BulletinBoard />
        </div>
        </div>
        </div>
        
    )
};

export default BoardContainer;