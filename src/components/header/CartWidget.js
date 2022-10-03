const Cart = () =>{
    let styles = { 
        color: "white"
    }
    return(
        <button className="bg-transparent border-0 me-1">
            <span style={styles} ><i className="fa-solid fa-cart-shopping fa-2xl"></i></span>
        </button>
    );
}

export default Cart