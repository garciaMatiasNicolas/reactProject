import { Link } from "react-router-dom";

const CartWidget = () =>{
    let styles = { 
        color: "white"
    }
    
    return(
        <Link to={'/cart'}>
            <div>
                <button className="bg-transparent border-0 me-1">
                    <span style={styles} ><i className="fa-solid fa-cart-shopping fa-2xl"></i></span>
                </button>
            </div>
        </Link>
    );
}

export default CartWidget