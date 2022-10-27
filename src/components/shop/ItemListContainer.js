import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";


const ItemListContainer = ()=>{
    
    const {category} = useParams()

    const [items, setItems] = useState([]);
    
    useEffect(()=>{
        getProducts().then(response => {
            let arrayPorducts = response.docs.map( d =>  ({id: d.id,  ...d.data()}) )
            if (category) {
               setItems(arrayPorducts.filter(i => i.category === category))
            }else{
                setItems(arrayPorducts)
            }  
        })
    }, [category]);
    
    const getProducts = () =>{
       const dataBase = getFirestore();
       const myCollection = collection(dataBase, 'Items');
       return getDocs(myCollection)
    }

    return(
        <div className="m-3 d-flex justify-content-center">
            <div className="col-10 d-flex justify-content-evenly flex-wrap">
              {items.map(p => <ItemCard key={p.id} {...p} />)}
            </div>
        </div>
    )
}

export default ItemListContainer