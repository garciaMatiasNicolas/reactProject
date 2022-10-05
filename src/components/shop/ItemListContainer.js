import { useEffect, useState } from "react"
import products from "../data/Elements"
import ItemCard from "./ItemCard";


const ItemListContainer = ()=>{
    
    const [items, setItems] = useState([])
    
    useEffect(()=>{
        getProducts().then(response => {setItems(response)})
    }, []);
    
    const getProducts = () =>{
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve( products )
            }, 1500)
        })
    }

    return(
        <div className="row container-fluid">
            <div className="col-3"></div>
            <div className="col-9 d-flex justify-content-between flex-wrap">
              {items.map(el => <ItemCard {...el}/>)}
            </div>
        </div>
    )
}

export default ItemListContainer