import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
        <nav>
  <Link to="/" className='link'>Shop</Link>
  <Link to="/about" className='link'>About</Link>
  <Link to="/contact" className='link'>Contact</Link>
    </nav> 
    </div>
    )
  }
  export default Nav;