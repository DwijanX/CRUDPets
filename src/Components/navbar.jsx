import { Link } from "react-router-dom"
import "../Styles/NavBar.css"

const NavBar=()=>{
    return(
        <header id="nav-wrapper">
        <nav id="nav">
        <div className="nav right">
            <Link to={`/`} className="nav-link active"><span className="nav-link-span"><span className="u-nav">Home</span></span></Link>
            <Link to={`/register`} className="nav-link active"><span className="nav-link-span"><span className="u-nav">Register Pet</span></span></Link>
        </div>
        </nav>
    </header>
    )
}

export default NavBar