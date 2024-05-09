// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav>
    <ul className="list-items">
      <li className="list-value">
        <Link to="/">Home</Link>
      </li>
      <li className="list-value">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)

export default Header
