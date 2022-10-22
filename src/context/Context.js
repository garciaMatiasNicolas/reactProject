import { createContext, useState } from "react";
import swal from "sweetalert";

const CartContext = createContext( [] );

const CartProvider = ( {children} )=> {
    // ESTADOS 
    const [itemsCart, setItemsCart] = useState([]);
    
    const [order, setOrder] = useState({});

    const [amount, setAmount] = useState([]);
    
    const [count, setCount]= useState(0);

    // FUNCIONES
    const add = ( item )=> {
        setItemsCart([...itemsCart, item]);
        localStorage.setItem("carritoCompras", JSON.stringify(itemsCart));
        swal({
            title: 'Producto agregado',
            icon: 'success',
            buttons: 'Aceptar'
        })
    }
    
    const select = () => {
        setAmount([...amount, count])
        console.log(amount);
    }
    
    const suma = ()=> {
        setCount(count => count + 1)
    }
    
    const resta = ()=> {
        setCount(count => count - 1)
    }

    
    // EXPORT DE ESTADOS Y FUNCIONES DEL CONTEXTO
    const context = {
        itemsCart,
        count,
        amount,
        add,
        select,
        suma,
        resta,
        order, 
        setOrder

    }
    
    return(
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}