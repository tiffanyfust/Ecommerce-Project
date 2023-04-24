import './App.css';
import logo from './assets/UltrasLogo.png';
import tagline from './assets/Casualwearstore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img src={logo} alt="The Ultras Logo"></img>
          <img src={tagline} alt="Casual Wear Store"></img>
        </div>
        <nav>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Accessories</li>
            <li>Collections</li>
            <li>Brand</li>
            <li>Sale</li>
            <li>Blog</li>
          </ul>
        </nav>
        <menu>
          <li id='search'><FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" /></li>
          <li id='account'><FontAwesomeIcon icon={faUser} /></li>
          <li id='favourites'><FontAwesomeIcon icon={faHeart} /></li>
          <li id='cart'><FontAwesomeIcon icon={faBagShopping} /></li>
        </menu>
      </header>
    </div>
  );
}

export default App;
