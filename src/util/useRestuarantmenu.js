import { useState ,useEffect } from "react";
import { MENU_API } from "./constants";

export const useRestaurantMenu =(resId)=>{

    const [resData , setResData] = useState(null)
    
    useEffect ( ()=> {
        fetchData();
    },[])


   const fetchData = async ()=>{
         
    const data = await fetch(MENU_API+resId);
    const json = await data.json();

    setResData(json.data);
   
    }
    return resData;
    
}

