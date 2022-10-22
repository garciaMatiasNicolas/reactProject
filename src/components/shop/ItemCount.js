import { useContext } from "react"
import { CartContext } from "../../context/Context";

const ItemCount = ()=> {
    const {select, count, suma, resta} = useContext(CartContext)

    return(
        <div className="mt-3 d-flex justify-content-between w-50 p-1">
            <button className="border-0 bg-transparent" onClick={resta}>-</button>
            <h3 className="App-paragraph">{count}</h3>
            <button className="border-0 bg-transparent" onClick={suma}>+</button>
        	<div>
                <button type="button" onClick={()=> {select()}} className="btn btn-secondary btn-sm">Seleccionar</button>
            </div>
        </div>
    )
}

export default ItemCount