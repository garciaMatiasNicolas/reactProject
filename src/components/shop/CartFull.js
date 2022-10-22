import { useContext } from "react";
import { CartContext } from "../../context/Context";
import CartCards from "./CartCards";
import DataBuyer from "./DataBuyer";

const CartFull = () =>{
    const array = [];

    const {itemsCart} = useContext ( CartContext );

    const prices = () => {
        let id = document.getElementById('total');
        let id2 = document.getElementById('value').value;
        let button = document.getElementById('button-total');
        let button2 = document.getElementById('button-comprar');
        id2 === 'SI' && array.push(500)  
        itemsCart.forEach(el => array.push(el.price))
        let total = array.reduce((a, b) => a + b, 0);
        id.innerHTML = `Total: ${total} pesos`
        button.className = 'd-none'
        button2.className = 'd-block App-btn btn text-white btn-sm '
    }

    return(
        <div className="container-fluid d-flex justify-content-between">
            <div className="col-6">{itemsCart.map(el => <CartCards key={el.id} {...el}/>)}</div>
            <div className="col-6" >
                <div className="mt-5 ms-5">
                        <h2 className="App-subtitle">Subtotal de tu compra:</h2>
                        <h2 className="App-paragraph mt-4">¿Desea agregar envio?</h2>
                        <h2 className="App-paragraph">(Solo Cordoba capital + 500$)</h2>
                        <select id="value" className="form-select form-select-sm w-50">
                            <option selected disabled="disabled" aria-required>Seleccione una opcion</option>
                            <option>SI</option>
                            <option>NO</option>
                        </select>
                        <div className="d-flex justify-content-between align-items-center w-75">
                            <button id="button-total" className="App-btn btn text-white btn-sm" onClick={()=>{prices()}}>Calcular</button>
                            <p className="App-paragraph fs-4 mt-2 me-5" id="total">Total: 0</p>
                            <button id="button-comprar" data-bs-toggle="modal" data-bs-target="#exampleModal" className="d-none">Comprar</button>
                        </div>
                        <DataBuyer/>
                </div>
            </div>
        </div>
    )
}

export default CartFull;