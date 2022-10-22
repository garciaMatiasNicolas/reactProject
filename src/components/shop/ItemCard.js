import { Link } from "react-router-dom"

const ItemCard = ({id, image, name, price}) =>{
    return(
        <Link className="text-decoration-none" to={`/item/${id}`}>
            <div id={id}  className="App-card mt-5 p-3 border" style={{width: "16rem", height: "25rem"}}>
                <img src={image} className="card-img-top w-100" alt="..."/>
                <div className="card-body d-flex flex-column justify-content-start w-100 p-0 mt-3">
                    <h3 className="App-paragraph">{name}</h3>
                </div>
                <div className="d-flex justify-content-between flex-column align-items-start w-100">
                    <h3 className="fw-bold fs-5 App-paragraph">${price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default ItemCard