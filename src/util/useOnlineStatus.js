import { useState, useEffect } from "react"

export const useOnlineStatus = ()=>{

    const [onlineStatus , setOnlineStatus] = useState(true);

    useEffect(()=>{
        checkStatus();
    },[])

    
    const checkStatus = ()=> {

        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        })

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        })
    }
    return onlineStatus;

}