import { collection, getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import swal from "sweetalert";
import { CartContext } from "../../context/Context";

const ItemDetail = () =>{
    const {id: itemId} = useParams();

    const { add, item, setItem, count, resta, suma} = useContext( CartContext );

    useEffect(()=>{
        getItem()
    }, [])

    const getItem = ()=>{
        const dataBase = getFirestore();
        const myCollection = collection (dataBase, 'Items');
        const docRef = doc ( myCollection, itemId );
        getDoc(docRef).then(res => setItem(res.data()))
    }

    const changeAmount = ()=> {
        const dataBase = getFirestore();
        const docRef = doc ( dataBase, 'Items', String(itemId) )
        updateDoc( docRef, {cantidad : count} );
        getItem();
    }

    const resetAmount = ()=>{
        add(item);
        const dataBase = getFirestore();
        const docRef = doc ( dataBase, 'Items', String(itemId) )
        updateDoc( docRef, {cantidad : 0} );
    }

    
    const select = ()=>{
        count < 1 ? swal({
            title: 'Error',
            text: 'Debe seleccionar al menos 1 producto',
            icon: 'error'
        }) : changeAmount()
    }


    return (
             <div className="container-fluid App-cards-container">
                <div className="col-8 col-md-6 col-xl-4 mt-5">
                    <img className="w-75" src={item.image} />
                </div>
                <div className="col-8 col-md-6 col-xl-4">
                    <div>
                        <h1 className="App-title mt-5">{item.name}</h1>
                    </div>
                    <div className="mt-5 border-bottom">
                        <h2 className="App-subtitle">Precio: ${item.price}</h2>
                        <p className="text-danger">Hasta tres cuotas sin interés de {item.price / 3} $</p>
                    </div>
                    <div className="mt-3 justify-content-between align-items-center d-flex w-100">
                        <div className="w-75">
                            <button type="button" className="btn rounded-0 border-top border-bottom border-start w-25" onClick={resta}>-</button>
                            <div className="btn rounded-0 border w-25">{count}</div>
                            <button type="button" className="btn rounded-0 border-top border-bottom border-end w-25" onClick={suma}>+</button>
                        </div>
                        <div className="w-25">
                            <button type="button" onClick={select} className="btn App-btn text-white btn-sm">Seleccionar</button>
                        </div>
                    </div>
                    <div className="mt-3">
                        {item.cantidad >= 1 ? <button onClick={resetAmount} className="App-btn text-white btn">Agregar</button> : <button disabled className="App-btn text-white btn">Agregar</button> }
                    </div>
                </div>
                </div>
    )
}

export default ItemDetail