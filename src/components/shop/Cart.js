import { useEffect, useState  } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Context";
import CartEmpty from "./CartEmpty";
import CartFull from "./CartFull";

const Cart = ()=> {

    const {itemsCart, count, setCount, deleteAll} = useContext ( CartContext );

    useEffect(()=>{counter()}, [])

    const counter = () => {
        itemsCart.length > 0 && setCount(itemsCart.length); 
    }

    const addHandler = ()=>{
        deleteAll()
        setCount(0)
    } 

    return(
        <>
        <div style={{width: '25rem'}} className="mt-3 d-flex justify-content-around align-items-center">
            <h2 className="App-title mt-2 fs-3">Mi carrito:</h2>
            <p className="App-paragraph mt-3 fs-4">{count} Item(s)</p>
            {itemsCart.length > 0 && <Link className="mt-1 btn btn-link" onClick={addHandler}>Vaciar carrito</Link>}
        </div>
        {itemsCart.length === 0 ? <CartEmpty/> :<CartFull/>}
        </>
    )    
}

export default Cart;