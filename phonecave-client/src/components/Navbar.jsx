import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <Link to={'/phones'}>See the list of phones</Link>
    </nav>
  );
};

export default Navbar;
