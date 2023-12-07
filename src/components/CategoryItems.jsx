import { IMG_CDN } from "../util/constants"


const CategoryItems = ({items}) => {
    console.log("Itmem",items)
    return(
        <div>
            {items.map((item)=> {
                return (
                    <div className="flex justify-between  p-2 pb-8 border-b-2 leading-9  bg-slate-100">
                        <div className="w-[60%]">
                    <h1 className="text-md font-bold">{item.card.info.name}</h1>
                    <h1 className="text-sm font-semibold text-slate-600">₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</h1>
                    <p className="text-sm text-slate-600 leading-5">{item.card.info.description}</p>
                    </div>

                    <div className="relative h-[100%]">
                        <img  src={ (item.card.info.imageId? IMG_CDN +item.card.info.imageId:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg")} alt="" className="w-[10rem] h-[9.4rem] object-cover rounded-[10px] " />
                        <button className=" absolute right-[1.7rem] -bottom-[15px] bg-slate-100 w-[60%] pt-[1px] pb-[1px] border-slate-800 border-[1px] rounded-[10px] ">Add +</button>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}


export default CategoryItems;