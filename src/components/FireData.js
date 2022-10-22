import { useEffect } from "react"
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";
import products from "./data/Elements";


const FireData = ()=>{
    
    const [dataFire, setDataFire] = useState([])

    useEffect(()=>{
        getData()
    }, [])

    const send = () =>{
        const dataBase = getFirestore();
        const ordersCollection = collection(dataBase, 'Items');
        products.forEach(el => {addDoc( ordersCollection, el ).then( ({id}) => {
            console.log(id)
        })}) 
    }


    const getData = ()=> {
      const db = getFirestore();
      const myCollection = collection(db, 'items');
      getDocs(myCollection).then(res=> {
            setDataFire( res.docs.map(el => ({id: el.id, ...el.data()})) );
        })
    }
    
    return(
        <button onClick={send}>enviar</button>
    )
}

export default FireData