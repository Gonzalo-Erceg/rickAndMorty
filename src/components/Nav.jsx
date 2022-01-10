import "./css/Nav.css"
import {Link} from "react-router-dom"
function Nav(){
    return(
        <nav className="navegacion">
            <Link to="/">Rick y morty.API</Link>
        </nav>
    )
}



export default Nav