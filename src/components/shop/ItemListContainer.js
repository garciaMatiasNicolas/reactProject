import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import products from "../data/Elements"
import ItemCard from "./ItemCard";


const ItemListContainer = ()=>{
    
    const {category} = useParams()

    const [items, setItems] = useState([])
    
    useEffect(()=>{
        getProducts().then(response => {
            if (category) {
               setItems(response.filter(i => i.category === category))
            }else{
                setItems(response)
            }  
        })
    }, [category]);
    
    const getProducts = () =>{
        return new Promise(resolve => {
                resolve( products )
        })
    }

    return(
        <div className="m-3 d-flex justify-content-center">
            <div className="col-10 d-flex justify-content-evenly flex-wrap">
              {items.map(el => <ItemCard {...el}/>)}
            </div>
        </div>
    )
}

export default ItemListContainer