import { Link } from "react-router-dom"

const ItemCard = ({id, image, name, price}) =>{
    return(
        <Link className="text-decoration-none" to={`/category/item/${id}`}>
            <div id={id} className="App-card" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column justify-content-start w-100 p-0 mt-3">
                    <h3 className="App-paragraph">{name}</h3>
                </div>
                <div className="d-flex justify-content-between flex-column align-items-start w-100">
                    <h3 className="fw-bold fs-5 App-paragraph">${price}</h3>
                    <div className="App-tag">
                        <span className="text-white App-tag">ENVIO GRATIS</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ItemCard