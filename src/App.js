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
        <div className='alertBar'>
          <ul>
            <li><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></li>
            <li><FontAwesomeIcon icon="fa-brands fa-instagram" /></li>
            <li><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></li>
            <li><FontAwesomeIcon icon="fa-brands fa-twitter" /></li>
            <li></li>
          </ul>
          <div id='news'>
            <p>Free Shipping On A Purchase Value Of $ 200</p>
          </div>
          <div id='phone'>
            <p>Let's Talk! +57 444 11 00 35</p>
          </div>
        </div>
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
