const NavbarMobile = () =>{
    return(
        <div className="App-toggler me-1">
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="material-symbols-outlined">menu</span></button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="d-flex justify-content-end mt-3">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <form className="d-flex mt-3">
                <input className="form-control ms-2 rounded-pill w-75" type="search" placeholder="Buscar.." aria-label="Search"/>
            </form>
            <div className="navbar-nav ms-3">
                <a className="nav-link active App-subtitle" aria-current="page" href="#">Hombre</a>
                <a className="nav-link active App-subtitle" href="#">Mujer</a>
                <a className="nav-link active App-subtitle"href="#">Camisetas</a>
                <a className="nav-link active App-subtitle" href="#">Ropa deportiva</a>
                <a className="nav-link active App-subtitle" href="#">Zapatillas</a>
            </div>
        </div>
    </div>
    );
}

export default NavbarMobile