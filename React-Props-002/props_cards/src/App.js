// import logo from "./logo.svg";
// import Images from "./Components/Images";
import Img from "./Images/me.jpg";
import Img4 from "./Images/4.jpg";
import Img2 from "./Images/2.jpg";
import Cards from "./Components/Cards";
// import { FaGithub } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <Cards movie="My Journey" yearAndAuthor="2000,shaikh_md" images={Img} />
      <Cards
        movie="100 Days Of Code"
        yearAndAuthor="2002,shaikh"
        images={Img2}
      />
      <Cards movie="Deep Code" yearAndAuthor="2002,shaikh" images={Img4} />
    </div>
  );
}

export default App;

/* {
        Images && Images.map((items) =>
          <div key={items.id}>
            <img src={items.image_src} />
           </div>
      }
          
          */
