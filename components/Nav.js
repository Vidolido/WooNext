const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">

            <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <a className="nav-link active" href="#">WooNext
                    <span className="visually-hidden">(current)</span>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Categories</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">My Account</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
};

export default Nav;