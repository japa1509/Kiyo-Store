import { CloseIcon } from "../Icons"
export function OrderCard (props) {
    const {title, image, price, id, handleDelete} = props
    let renderCloseIcon
    if(handleDelete) {
        renderCloseIcon = <button onClick={() => handleDelete(id)}> <CloseIcon/> </button>
    }
    return(
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20 ">
                    <img className="w-full h-full rounded-lg object-cover" src={image} alt={title} />
                </figure>
                <p className="text-sm font-light max-w-36">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
            {renderCloseIcon}
            </div>
        </div>
    )
}