// Create a react app and in the HTML part of App.js, change it to like an intro for a restaurant website.

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <div classNNameName="hero"> */}
      <nav>
        <h2 className="logo">Banjara<span>Dhaba</span></h2>
        <ul>
          <li><a href="#">Home</a></li>
           <li><a href="#">Services</a></li> 
          <li><a href="#aboutMe">Menu</a></li>
          <li><a href="#contactMe">Contact </a></li>
          <li><a href="#aboutMe">About us</a></li>
        </ul>
        {/* <a href="#" classNName="btn">visit..</a> */}
      </nav>
      </header>
      <section className="about">
        <div className="main">
          <div className="about-text">
            <h2>Welcome To <br/> Banjara Dhaba</h2>
            <h5>Famous for <span>North Indian Food</span></h5>
            <p>
            Banjara Dhaba is located at IC Colony in Borivali West. This place has an interesting ambiance justifying its name. The interior is designed with a view of making you feel like dining in the countryside dhaba.
            CuisinesBiryani ,Mughlai ,Maharashtrian ,Fast Food ,Kebab ,Sichuan ,Chinese ,North Indian ,Multicuisine ,Sea Food ,Barbeque ,Indian ,TandooriTypeCasual Dining ,BarKnown forPolite Staff,Congenial Staff,Quick Service,Ambience,Dhaba Setup,Peaceful AmbienceAverage .
            </p>
          </div>
        </div>
      </section>


    </div>



  );
}

export default App;
