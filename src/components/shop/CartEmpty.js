import { Link } from "react-router-dom"

const CartEmpty = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <div className="d-flex justify-content-center">
                <img className="w-25" src="https://cdn-icons-png.flaticon.com/512/2611/2611313.png"/>
            </div>
            <div className="mt-4 d-flex flex-column justify-content-between align-items-center">
                <h2 className="App-subtitle">Ups! Tu carrito esta vacio</h2>
                <Link to={'/'}>Volver al inicio</Link>
            </div>
        </div>
    )
}

export default CartEmpty