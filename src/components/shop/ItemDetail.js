import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from "../data/Elements"


const ItemDetail = () =>{
    const [item, setItem] = useState([])
    
    const {id: itemId}= useParams()

    useEffect(()=>{
        getItem().then (response => {setItem(response)})
    }, [])

    const getItem = ()=>{
        return new Promise((resolve) => {
            resolve(products.find(i=> i.id == itemId))
        })
    }

    return (
        <div className="container-fluid row d-flex justify-content-center">
                <div className="col-6 mt-3">
                    <img src={item.image} />
                </div>
                <div className="col-4">
                    <div>
                        <h1 className="App-title mt-5">{item.name}</h1>
                    </div>
                    <div className="mt-5 border-bottom">
                        <h2 className="App-subtitle">Precio: ${item.price}</h2>
                        <p className="text-danger">Hasta tres cuotas sin interés de {item.price / 3}</p>
                    </div>
                    <div className="mt-3">
                        <h3 className="App-paragraph">Talles</h3>
                    </div>
                    <div className="mt-3">
                        <button className="App-btn btn-lg text-white">Agregar al carrito</button>
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail