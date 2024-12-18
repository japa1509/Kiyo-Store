import { CloseIcon } from "../Icons"
import { useContext } from "react"
import { ShoppingContext } from "../../context"
export function ProductDetail () {
    const { closeProductDetail, isDetailOpen,productToShow} = useContext(ShoppingContext)
    return(
        <aside className={`${isDetailOpen ? "flex" : "hidden"} w-[360px] flex-col fixed right-0 top-[68px] h-[calc(100vh-68px)] border border-black rounded-lg bg-white `}>
            <div className=" flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <button 
                onClick={closeProductDetail}
                ><CloseIcon/></button>
            </div>
            <div className="flex flex-col overflow-y-auto p-6">
                <figure>
                    <img 
                     className="w-full h-48 rounded-2xl p-2"
                     src={productToShow.image} 
                     alt={productToShow.title}/>
                 <p className="flex flex-col">
                    <span className="font-medium text-lg mb-2">${productToShow.price}</span>
                    <span className="font-medium text-md">{productToShow.title}</span>
                    <span className="font-light text-sm">{productToShow.description}</span>
                 </p>
                </figure>
            </div>
        </aside>
    )
}