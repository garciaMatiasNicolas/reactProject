import { createContext, useState } from "react";
import swal from "sweetalert";

const CartContext = createContext( [] );

const CartProvider = ( {children} )=> {
    // ESTADOS 
    const [itemsCart, setItemsCart] = useState([]);

    const [item, setItem] = useState([]);
    
    const [order, setOrder] = useState({});
    
    const [count, setCount]= useState(0);

    const [totalPrice, setTotalPrice] = useState([])

    // FUNCIONES
    const add = ( item )=> {
        setItemsCart([...itemsCart, item]);
        item.cantidad > 1 ? setTotalPrice([...totalPrice, item.cantidad*item.price]) : setTotalPrice([...totalPrice, item.price])
        swal({
            title: 'Producto agregado',
            icon: 'success',
            buttons: 'Aceptar'
        })
    }

    const sumarTotal = () => {
       setTotalPrice([totalPrice.reduce((a , b)=> a + b, 0)])
    }
    
    const suma = ()=> {
        setCount(count => count + 1);
    }
    
    const resta = ()=> {
        setCount(count => count - 1);
    }

    const deleteAll = ()=>{
        setItemsCart([]);
        setTotalPrice([]);
    }

    const deleteItem = ( itemParam ) =>{
        let item = itemsCart.find((prod)=> prod.id === itemParam.id);
        let indice = itemsCart.indexOf(item);
        setItemsCart(itemsCart.splice(indice, 1));
    }

    
    // EXPORT DE ESTADOS Y FUNCIONES DEL CONTEXTO
    const context = {
        setItemsCart,
        itemsCart,
        count,
        add,
        suma,
        resta,
        order, 
        setOrder,
        deleteAll, 
        setCount,
        item,
        setItem,
        totalPrice,
        setTotalPrice,
        deleteItem,
        sumarTotal
    }
    
    return(
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}