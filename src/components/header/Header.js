import NavbarDesk from "./Navbar-desktop";
import logo from "../assets/logo.png"
import Search from "./Search";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const Header = () => {
    let styles = {
        width:"100%",
        height:"100%"   
    }

    return (
        <header className="App-header w-100">
            <div className="d-flex justify-content-between align-items-center w-100 ">
                <div className="App-logo"><Link to="/" ><img style={styles} src={logo}  alt="logo"/></Link></div>
                <div className="d-flex justify-content-between align-items-center">
                <Search/>
                <CartWidget/>
                </div>
            </div>
            <div className="bg-white">
              <NavbarDesk/>
            </div>          
        </header>
    );
}

export default Header