import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import CategoryItems from "./CategoryItems";
import { useState } from "react";
import { useState } from "react";

const RestaurantCategory = ({dataCategory,showItems,setShowItems})=>{
    const [visibility,setVisibility]= useState(showItems)
    return (
        <div className="flex flex-col  ">
        <div className=" flex justify-between items-center cursor-pointer  bg-slate-100 pl-3 pr-3 h-[4rem] w-6/12 mx-auto mt-4 rounded-lg shadow-lg font-bold" onClick={()=>{
            setVisibility(!visibility)
            setShowItems()
        }}>
            <h1 className="text-[1.1rem]">{dataCategory?.title} ({dataCategory.itemCards.length})</h1><span>{showItems&&visibility===true?<FaChevronUp/>:<FaChevronDown/>}</span> 
        </div>
        <div className="w-6/12 mx-auto">
            {showItems&& visibility&&< CategoryItems key={dataCategory?.title} items={dataCategory?.itemCards}/>}
        </div>

        </div>
    )   
}

export default RestaurantCategory