import { useContext, useEffect } from "react";
import { CartContext } from "../../context/Context";
import CartCards from "./CartCards";
import DataBuyer from "./DataBuyer";

const CartFull = () =>{

    const {itemsCart, totalPrice, setTotalPrice} = useContext ( CartContext );

    useEffect(()=>{
        calculate()
    },[])

    const prices = () => {
     console.log(totalPrice)
    }

    const calculate = ()=>{
        setTotalPrice(totalPrice.reduce((a,b)=> a + b, 0))
        setTotalPrice([...totalPrice])
    }

    const handleOnChange = (e) => {
        const value = e.target.value
        if(value === 'SI'){
            setTotalPrice(totalPrice.push(500));
            e.target.setAttribute("disabled", "");
            setTotalPrice(totalPrice.reduce((a,b)=> a + b, 0))
        };
        
    }

    return(
        <div className="container-fluid">
            <div className="col-12">{itemsCart.map((el, id) => <CartCards key={id} {...el}/>)}</div>
            <div className="col-12" >
                <div className="mt-5 ms-5">
                        <h2 className="App-subtitle">Subtotal de tu compra:</h2>
                        <h2 className="App-paragraph mt-4">¿Desea agregar envio?</h2>
                        <h2 className="App-paragraph">(Solo Cordoba capital + 500$)</h2>
                        <select id="value" onChange={handleOnChange} className="form-select form-select-sm w-75 rounded-0">
                            <option selected disabled="disabled" aria-required>Seleccione una opcion</option>
                            <option >SI</option>
                            <option>NO</option>
                        </select>
                        <div className="d-flex flex-column justify-content-between align-items-start w-75 mb-5">
                            <p className="App-paragraph fs-4 mt-2">Total:{totalPrice}</p>
                            <button id="button-comprar" data-bs-toggle="modal" data-bs-target="#exampleModal" className="App-btn btn w-100 text-white rounded-0">Comprar</button>
                        </div>
                        <DataBuyer/>
                </div>
            </div>
        </div>
    )
}

export default CartFull;