import { IMG_CDN } from "../util/constants";
import UserContext from "../util/userContext";
import { useContext } from "react";


const Cards = (prop) => {


    const {loggedInUser} = useContext(UserContext)

    const { resList } = prop;

    // console.log(resList)

    const { cloudinaryImageId, name, avgRating, cuisines } = resList?.info;


    return (
        <div className="flex flex-col w-[18rem] h-[20rem] rounded-xl hover:scale-[0.95] hover:ease-in-out relative mb-4">
            <div className="food-img h-[60%] m-[15px]">
                <img className=" h-[100%] w-[100%] overflow-hidden object-cover rounded-xl" src={IMG_CDN + cloudinaryImageId} alt="" />
            </div>
            <div className="res-desc pt-2 pl-5">
                <div className="res-name text-[1.1rem] font-semibold">
                    {name}
                </div>
                <div className="rating-delivery-info text-gray-600 font-medium">
                    <div className="rating">{avgRating
                }</div></div>
                <div className="res-cuisines text-gray-500">
                    {cuisines.join(', ')}
                </div>
                <div className="font-bold text-md">
                    {loggedInUser}
                </div>

            </div>


        </div>
    )

}

export const isOpenLabel = (Cards)=> {
    return (props)=>{
        return (
            <div className="relative hover:scale-[0.95] hover:ease-in-out">
                <label className="absolute z-10 left-1 bg-[#181818] p-1 w-[5rem] rounded-lg flex justify-center items-center text-white ">Open</label>
                <Cards {...props}/>


            </div>
        )
    }
}

export default Cards