
import Cards, { isOpenLabel } from "./Cards"
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../util/useOnlineStatus";
import UserContext from "../util/userContext";




const Body = () => {

    

    const [restaurantList, setRestaurantList] = useState([]);
    console.log("This is restaurant ", restaurantList)

    const [searchtext, setSearchText] = useState("")
    console.log("This is search text ", searchtext)

    const [filteredList, setFilteredList] = useState([])

    

    const IsOpen = isOpenLabel(Cards)






    useEffect(() => {
        fetchData();

    }, [])

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>Seems like you are oflline!!!</h1>
    }


    const fetchData =


        async () => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5729847&lng=77.32490430000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

            const Datajson = await data.json();
            console.log("Data  ", Datajson)
            console.log(Datajson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestaurantList(Datajson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredList(Datajson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
 
        const {setUserName} = useContext(UserContext)

    return (

        <div className="">

            <div className="filter-btn flex gap-7 pt-9 pb-9 pl-14 text-sm ">

                <div className="rounded-full border-gray-500 border-[1.5px]  pt-2 pb-2 pl-2 pr-2 ">  <button className="filter-top" onClick={() => {
                    const filteredRestaurant = restaurantList.filter((res) => (res.info.avgRating > 4.2))
                    setFilteredList(filteredRestaurant);
                }
                }
                >Top rated restaurants</button><button className="pl-3" onClick={() => {
                    setFilteredList(restaurantList)

                }}
                ><i className="fa-solid fa-xmark"></i></button></div>

                {/* search functinality */}

                <div className=" flex justify-center w-[22rem] border-gray-500 border-[1.5px] rounded-full ">
                    <input className="flex w-[85%] rounded-l-full bg-transparent pl-4 overflow-hidden outline-none" type="text" placeholder="Search for restaurants and foods" value={searchtext} onChange={(e) => {
                        return (
                            setSearchText(e.target.value)

                        )
                    }} />
                    <button className=" w-[15%]" onClick={() => {
                        const filter = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchtext.toLocaleLowerCase()));
                        console.log(filter);
                        setFilteredList(filter)
                    }}><i className="fa-solid fa-magnifying-glass search-icon fa-lg"></i></button>
                </div>

                

                <div >
                <input className="border-black border-2" onChange={(e)=>{
                    setUserName(e.target.value)


                }}/>
                </div>
            </div>

          

            <div className="res-container flex flex-wrap gap-10 w-[85%] mx-auto">
                {filteredList !== null && filteredList !== undefined?
                    (filteredList.map((restaurant) => (
                        <Link to={'/restaurants/' + restaurant.info.id} key={restaurant.info.id} >{restaurant?.info?.availability?.opened? <IsOpen resList={restaurant} /> : <Cards resList={restaurant} />}</Link>
                    ))) : (<Shimmer />)
                }
            </div>


        </div>
    )
}
export default Body
