import { Link } from "react-router-dom";

const NavbarDesk = ({category}) =>{
    const aStyle = ["App-paragraph text-decoration-none"];

    return(   
      <nav className="w-100 d-flex justify-content-center border-bottom">
        <div className="w-75 d-flex justify-content-around align-items-center" style={{height: "3.5rem"}}>
          <div><Link to={`/category/${category}`} className={aStyle}>{category}</Link></div>
          <div><Link to={`/category/nba`} className={aStyle}>NBA</Link></div>
        </div>
      </nav>
    );
}

export default NavbarDesk