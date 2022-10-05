import NavbarDesk from "./Navbar-desktop";
import logo from "../assets/logo.png"
import NavbarMobile from "./Navbar-mobile";
import Cart from "./CartWidget";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import products from "../data/Elements"

const Header = () => {
    let styles = {
        width:"100%",
        height:"100%"   
    }

    const [filter, setFilter] = useState([])
    
    useEffect(()=>{
        getProducts().then(response => {setFilter(response)})
    }, []);
    
    const getProducts = () =>{
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve( products )
            }, 1500)
        })
    }


    return (
        <header className="App-header w-100">
            <div className="d-flex justify-content-between align-items-center w-100 ">
                <div className="App-logo"><Link to="/" ><img style={styles} src={logo}  alt="logo"/></Link></div>
                <div className="d-flex justify-content-between align-items-center">
                <Search/>
                <Cart/>
                <NavbarMobile></NavbarMobile>
                </div>
            </div>
            <div className="bg-white">
                {filter.map(el => <NavbarDesk {...el}/>)}
            </div>          
        </header>
    );
}

export default Header