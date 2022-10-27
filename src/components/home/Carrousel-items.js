import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Cards = ({image, name, price, id}) =>{
    return(
        <Link className="text-decoration-none" to={`/item/${id}`}>
        <div className="App-card mt-5 p-3 border w-75 h-100">
            <img src={image} className="card-img-top w-100" alt="..."/>
            <div className="card-body d-flex flex-column justify-content-start w-100 p-0 mt-3">
                <h3 className="App-paragraph App-carrousel">{name}</h3>
            </div>
            <div className="d-flex justify-content-between flex-column align-items-start w-100">
                <h3 className="fw-bold fs-5 App-paragraph">${price}</h3>
            </div>
        </div>
        </Link>
    )
}

const CarrouselItems = () =>{
    const [items, setItems] = useState([]);

    useEffect(()=>{
        getItems().then(response => {
            let arrayPorducts = response.docs.map( d =>  ({id: d.id,  ...d.data()}) )
            setItems(arrayPorducts.filter(i => i.carrousel === true));
        })
    }, [])

    const getItems = () =>{
        const dataBase = getFirestore();
        const myCollection = collection(dataBase, 'Items');
        return getDocs(myCollection)
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return(
        <div className="m-5 ">
            <h2 className="App-subtitle fs-4">Productos destacados</h2>
            <div>
                <Slider {...settings}>
                    {items.map((el, id) => <Cards key={id} {...el}/>)}
                </Slider>
            </div>
        </div>
    )
}

export default CarrouselItems