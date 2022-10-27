import { useContext } from "react";
import { CartContext } from "../../context/Context";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Order = () =>{

    const {itemsCart, deleteAll, order} = useContext( CartContext );

    const pushOrder = ()=>{
        const dataBase = getFirestore();
        const ordersCollection = collection(dataBase, 'orders');
        addDoc( ordersCollection, order ).then( ({id}) => {
            console.log(id)
        })
        deleteAll();
    }

    return(
        <div>
            <div className="ms-5 mt-3 w-50">
                <h2 className="App-title fs-4">Resumen de su compra:</h2>
                <div>
                    <h3 className="d-inline App-subtitle fs-3">Nombre y apellido: </h3>
                    <p className="d-inline App-paragraph fs-3 ms-3 mt-1">{order.buyer.nombre}</p>
                </div>
                <div>
                    <h3 className="d-inline App-subtitle fs-3">Email: </h3>
                    <p className="d-inline App-paragraph fs-3 ms-3 mt-1">{order.buyer.emial}</p>
                </div>
                <div>
                    <h3 className="d-inline App-subtitle fs-3">Direccion: </h3>
                    <p className="d-inline App-paragraph fs-3 ms-3 mt-1">{order.buyer.direccion}</p>
                </div>
                <div>
                    <h3 className="d-inline App-subtitle fs-3">Telefono: </h3>
                    <p className="d-inline App-paragraph fs-3 ms-3 mt-1">{order.buyer.telefono}</p>
                </div>
                <div>
                    <h3 className="d-inline App-subtitle fs-3">Producto(s): </h3>
                    {itemsCart.map((e, id) => <p key={id} className="d-inline App-paragraph fs-3 ms-3 mt-1">{e.name}</p>)}
                </div>
                <div>
                    <h3 className="d-inline App-subtitle fs-3">Total: </h3>
                    <p className="d-inline App-paragraph fs-3 ms-3 mt-1">{order.totalPrice}$</p>
                </div>
                <Link to={'/'}>
                    <button onClick={()=>{pushOrder()}} className="btn App-btn text-white mt-5" type='button'>LEVANTAR ORDERN</button>
                </Link>
            </div>
        </div>
    )
}

export default Order;