import { useEffect, useState  } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import CartEmpty from "./CartEmpty";
import CartFull from "./CartFull";

const Cart = ()=> {

    const {itemsCart} = useContext ( CartContext );

    const [numberItems, setNumberItems] = useState(0);

    useEffect(()=>{count()}, [])

    const count = () => {
        itemsCart.length > 0 && setNumberItems(itemsCart.length) 
    }

    return(
        <>
        <div style={{width: '16rem'}} className="mt-3 d-flex justify-content-around align-items-center">
            <h2 className="App-title mt-2 fs-3">Mi carrito:</h2>
            <p className="App-paragraph mt-3 fs-4">{numberItems} Items</p>
        </div>
        {itemsCart.length === 0 ? <CartEmpty/> :<CartFull/>}
        </>
    )    
}

export default Cart;