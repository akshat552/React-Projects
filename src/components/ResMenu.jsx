import React from 'react';
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../util/useRestuarantmenu";
import RestaurantCategory from "./RestaurantCategory";
import { FcRating } from "react-icons/fc";
 import { useState } from 'react';






const Menu = () => {
    const [showIndex ,setShowIndex] = useState(0) 
    const { resId } = useParams();
    // console.log(" id ...", resId)
    const menuItems = useRestaurantMenu(resId);
    

     

    if (menuItems === null) {
        return <Shimmer />
    }
   
    const { name, cuisines, costForTwoMessage, avgRating, locality
    } = menuItems?.cards[0]?.card?.card?.info || {};
    console.log(menuItems?.cards[0]?.card?.card?.info)

    const { itemCards } = menuItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    console.log("Items", menuItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)


    const itemCategory = menuItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c?.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );


    console.log("ItemCategory", itemCategory)



    


    return (
        <div className=" ">
            <div className="info w-6/12 mx-auto  flex justify-between mt-9 mb-2 bg-slate-50 rounded-t-sm p-3">
                <div><h1 className="font-semibold text-[1.7rem]">{name}</h1>
                    <h3 className="text-gray-500 font-medium">{cuisines.join(", ")}<br /><span className="text-sm">{locality}</span><br /><span className="font-semibold">{costForTwoMessage.toUpperCase()}</span></h3></div>

                <div className="flex justify-center items-center text-[1.1rem]">
                    <h1 className="flex justify-center items-center gap-1"><FcRating /> {avgRating} </h1>

                </div>

            </div>
            <hr className="h-[2px] w-6/12  mx-auto mt-3 bg-gray-400 " />

            {itemCategory.map((items,index) => <RestaurantCategory key={items?.card?.card?.title} dataCategory={items?.card?.card} showItems = {index===showIndex?true:false} setShowItems ={()=> setShowIndex(index)}/>)}


        </div>
    )
}

export default Menu