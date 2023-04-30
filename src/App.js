import './App.css';
import logo from './assets/UltrasLogo.png';
import tagline from './assets/Casualwearstore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import backgroundImg from './assets/sliderImage1.jpg';


function App() {
  return (
    <div className="App">
      <header>
        <div className='alertBar'>
          <ul>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
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

{/*Slider Section */}

      <section id='landingSlider'>
        <div>
          <img src={backgroundImg}></img>
        </div>
        <div id='sliderText'>
          <h1>Summer Collection.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac penatibus et.</p>
          <a href='#'>Shop It Now →</a>
        </div>
      </section>

{/*Featured Products*/}

      <section id='featuredProducts'>
        <div>
          <h2>Featured Products</h2>
          <a href='#'>View All Products →</a>
        </div>
        <ul>
          <li>
            <div>
              <img src=''></img>
            </div>
            <div>
              <h3>Full Sleeve Cover Shirt</h3>
              <p>$ 40.00</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
