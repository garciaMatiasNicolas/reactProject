import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Context";
import CartCards from "./CartCards";

const CartFull = () =>{

    const {itemsCart, totalPrice, sumarTotal} = useContext ( CartContext );

    const handleOnclick = ()=>{
        let resultado = document.getElementById('total');
        let btn = document.getElementById('calcular');
        resultado.innerHTML= `SubTotal de tu compra: ${totalPrice.reduce((a , b)=> a + b, 0)}`
        btn.className='d-none'
    }

    return(
        <div className="container-fluid">
            <div className="col-12">{itemsCart.map((el, id) => <CartCards key={id} {...el}/>)}</div>
            <div className="col-12" >
                <div className="mt-5 ms-5 w-75">
                        <div className="d-flex flex-column justify-content-between align-items-start w-75 mb-5">
                            {itemsCart.length >= 2 ? 
                            <div>
                                <button id="calcular" className="App-btn btn w-100 text-white rounded-0" onClick={handleOnclick} >Calcular</button>
                                <p id="total" className="App paragph fs-4 mt-2"></p>
                            </div> :
                            <div className="d-flex justify-content-between">
                                <h2 className="App-subtitle">Subtotal de tu compra:</h2>
                                <p className="App paragph ms-5 fs-5">Total: {totalPrice}</p>
                            </div>
                            }
                            <Link to={'/cart/personal-data'}>
                                <button id="button-comprar" className="App-btn btn w-100 text-white rounded-0">Confirmar
                                <span className="ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CartFull;