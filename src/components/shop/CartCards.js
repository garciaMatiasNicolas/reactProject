import { useContext, useState } from "react"
import { CartContext } from "../../context/Context"

const CartCards = ({image, name, price, el})=> {

  const {itemsCart} = useContext( CartContext );

  const [deleteI, setDeleteI] = useState([]);
    
  const deleteFn = ()=>{
    let x = itemsCart.splice(0, 1);
    console.log(x)
  }

  return(
        <div className="card mt-5">
        <div className="row g-0">
          <div className="col-md-3">
            <img src={image}className="img-fluid rounded-start h-75 mt-4"/>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="App-subtitle mt-4">{name}</h2>
              <p className="App-paragraph">Cantidad: {el}</p>
              <h3 className="App-subtitle fs-5">Precio final: {price}</h3>
            </div>
          </div>
          <div className="col-md-2"><button className="btn btn-transparent" onClick={deleteFn} style={{margin: '2.1rem'}}><i className="fa-solid fa-trash"></i></button></div>
        </div>
      </div>
    )
}

export default CartCards