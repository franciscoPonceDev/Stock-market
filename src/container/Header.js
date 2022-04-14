import { IoIosArrowBack } from 'react-icons/io';
import { BsMicFill } from 'react-icons/bs';
import { AiTwotoneSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <>
    <header>
      <nav className="header-nav">
        <ul className="nav-ul">
          <li className="ul-back">
            <Link
              to="/"
            >
              <IoIosArrowBack />
            </Link>
          </li>
          <li className="ul-logo">
            <Link
              className="logo"
              to="/"
            >
              <h1 className="title">Stock Data App</h1>
            </Link>
          </li>
          <li className="ul-icons">
            <button type="button" className="btn">
              <BsMicFill />
            </button>
            <button type="button" className="btn">
              <AiTwotoneSetting />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;
