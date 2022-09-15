import "./App.css";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>My Portfolio</h2>
        <hr />
        <main>
          <Bio />
          <hr />
          <Experience />
          <hr />
          <Skills />
          <hr />
          <Contact />
        </main>
      </header>
    </div>
  );
}

export default App;
