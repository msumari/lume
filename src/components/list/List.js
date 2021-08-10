import ListItem from '../listitem/listitem'
import React from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

const List = () => {
    return (
        <div className="list bg-black">
            <span className="listTitle text-white text-xl ml-14">Continue to Watch</span>
            <div className="wrapper ml-12 relative">
                <BsChevronLeft className="text-white h-10 w-10 absolute left-0 top-0 bottom-0 z-50 m-auto cursor-auto" />
                <div className="container ml-12 flex w-max mt-3.5">
                   
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                  
                  
                   
                
                

                </div>
                <BsChevronRight className="text-blue-400 h-10 w-10 absolute right-0 top-0 bottom-0 z-50 m-auto cursor-auto" />
            </div>
        </div>
       
    )
}

export default List
