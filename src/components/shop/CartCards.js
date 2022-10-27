import { useContext } from "react"
import { CartContext } from "../../context/Context"

const CartCards = ({item, id, image, name, price, cantidad})=> {
  
  const {deleteItem} = useContext(CartContext);

  return(
        <div className="card mt-5">
        <div className="row g-0">
          <div className="col-3">
            <img src={image}className="img-fluid rounded-start h-75 mt-4"/>
          </div>
          <div className="col-7">
            <div className="card-body">
              <h2 className="App-subtitle mt-4">{name}</h2>
              <p className="App-paragraph">Cantidad: {cantidad}</p>
              {cantidad > 1 ? 
              <div>
                <h3 className="App-subtitle fs-5">Precio x Unidad: {price}</h3>
                <h3 className="App-subtitle fs-5">Precio final: {cantidad*price}</h3>
              </div> : 
              <h3 className="App-subtitle fs-5">Precio final: {price}</h3>}
            </div>
          </div>
          <div className="col-2"><button onClick={()=>{deleteItem(item)}} className="btn btn-transparent" style={{margin: '2.1rem'}}><i className="fa-solid fa-trash"></i></button></div>
        </div>
      </div>
    )
}

export default CartCards