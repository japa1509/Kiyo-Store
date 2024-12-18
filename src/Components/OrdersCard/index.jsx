
export function OrdersCard (props) {
    const {totalPrice, totalProducts} = props
    return(
        <div className="flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg">
           <div className="flex justify-between w-full">
           <div className="flex flex-col">
           <span className="font-ligth">01.02.24</span>
           <span className="font-ligth">{totalProducts} articles</span>
           </div>
            
            <span className="font-medium text-2xl">{totalPrice}</span>
           </div>
        </div>
    )
}