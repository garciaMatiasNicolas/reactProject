import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/Context";
import products from "../data/Elements"
import ItemCount from "./ItemCount";

const ItemDetail = () =>{
    const [item, setItem] = useState([]);
    
    const {id: itemId} = useParams();

    const { add } = useContext( CartContext );

    useEffect(()=>{
        getItem().then (response => {setItem(response)})
    }, [])

    const getItem = ()=>{
        return new Promise((resolve) => {
            resolve(products.find(i=> i.id == itemId))
        })
    }

    return (
             <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="col-8 col-md-6 mt-5">
                    <img src={item.image} />
                </div>
                <div className="col-8 col-md-4">
                    <div>
                        <h1 className="App-title mt-5">{item.name}</h1>
                    </div>
                    <div className="mt-5 border-bottom">
                        <h2 className="App-subtitle">Precio: ${item.price}</h2>
                        <p className="text-danger">Hasta tres cuotas sin interés de {item.price / 3}</p>
                    </div>
                    <h2 className="App-paragraph mt-3">Cantidad</h2>
                    <ItemCount/>
                    <div className="mt-3">
                        <button onClick={()=>{add(item)}} className="btn App-btn App-paragraph btn-lg text-white">Agregar</button>
                    </div>
                </div>
                </div>
    )
}

export default ItemDetail