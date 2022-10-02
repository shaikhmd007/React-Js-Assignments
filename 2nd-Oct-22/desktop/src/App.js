// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="body">
      <header className="header">
        <img src="Programer.jpg" className="bg-img" alt="display-img" />
      </header>
      <footer className="items">
        <div className="left-items-container">
          <div className="all-items">
            <i class="fa-brands fa-windows"></i>
          </div>
          <div className="all-items">
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="all-items">
            <i class="fa-solid fa-display"></i>
          </div>
          <div className="all-items">
            <i class="fa-solid fa-cloud"></i>
          </div>
          <div className="all-items">
            <i class="fa-sharp fa-solid fa-file-excel"></i>
          </div>
          <div className="all-items">
            <i class="fa-solid fa-folder"></i>
          </div>
          <div className="all-items">
            <i class="fa-brands fa-chrome"></i>
          </div>

          <div className="all-items">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
          <div className="all-items">
            <i class="fa-solid fa-paint-roller"></i>
          </div>

          {/* <div>
            <i class="fa-brands fa-facebook"></i>
          </div> */}

          {/* <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-facebook"></i> */}
        </div>

        <div className="right-items-container">
          <div>
            <i class="fa-sharp fa-solid fa-caret-up"></i>
          </div>
          <div>
            <i class="fa-brands fa-bluetooth"></i>
          </div>
          <div>
            <i class="fa-solid fa-keyboard"></i>
          </div>
          <div>
            <i class="fa-solid fa-wifi"></i>
          </div>
          <div>
            <i class="fa-solid fa-battery-half"></i>{" "}
          </div>
          <div>12:28 PM</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
