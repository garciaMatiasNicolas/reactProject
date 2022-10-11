import { Link } from "react-router-dom";

const NavbarDesk = () =>{
    const aStyle = ["App-paragraph text-decoration-none"];

    return(   
      <nav className="w-100 d-flex justify-content-center border-bottom">
        <div className="w-75 d-flex justify-content-around align-items-center" style={{height: "3.5rem"}}>
          <div><Link to={`/category/futbol`} className={aStyle}>Futbol</Link></div>
          <div><Link to={`/category/basquet`} className={aStyle}>NBA</Link></div>
        </div>
      </nav>
    );
}

export default NavbarDesk