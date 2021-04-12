import {Link} from "react-router-dom"
import "./Navbar.css"

function Navbar(props) {
  return (
    <nav className="nav">
      <ul>
      <Link to="/face">Face</Link>
      <Link to="/eye">Eyes</Link>
      <Link to="/lip">Lip</Link>
      <Link to="/">Home</Link>
      </ul>

    </nav>
  );
}

export default Navbar;
