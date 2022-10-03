import NavbarDesk from "./Navbar-desktop";
import logo from "../assets/logo.png"
import NavbarMobile from "./Navbar-mobile";
import Cart from "./CartWidget";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = () => {
    let styles = {
        width:"100%",
        height:"100%"   
    }
    return (
        <header className="App-header w-100">
            <div className="d-flex justify-content-between align-items-center w-100 ">
                <div className="App-logo"> <Link to="/" ><img style={styles} src={logo}  alt="logo"/></Link> </div>
                <div className="d-flex justify-content-between align-items-center">
                <Search/>
                <Cart/>
                <NavbarMobile></NavbarMobile>
                </div>
            </div>
            <div className="bg-white">
                <NavbarDesk></NavbarDesk>
            </div>          
        </header>
    );
}

export default Header