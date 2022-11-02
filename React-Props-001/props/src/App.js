// import logo from './logo.svg';
import "./Components/ParentToChild.css";
import ParentToChild from "./Components/ParentToChild";

function App() {
  const main_styling = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    // flexDirection: "row",
    // height: "100%",
    // width: "100vw",
    padding: "0.1rem",
  };
  return (
    <>
      <div style={main_styling}>
        <ParentToChild title="#FF6663" color="PINK" hashcode="PINK" />
        <ParentToChild title="#333333" color="GRAY" hashcode="#333333" />
        <ParentToChild title="#000000" color="BLACK" hashcode="#000000" />
        <ParentToChild title="#38BB14" color="GREEN" hashcode="#38BB14" />
        <ParentToChild title="#C90B0B" color="RED" hashcode="#C90B0B" />
      </div>

      <div style={main_styling}>
        <ParentToChild title="#FF8000" color="ORANGE" hashcode="#FF8000" />
        <ParentToChild title="#FFf500" color="YELLOW" hashcode="#FFf500" />
        <ParentToChild title="#CCCCCC" color="LIGHT-GRAY" hashcode="#CCCCCC" />
        <ParentToChild title="#7E41A2" color="PURPLE" hashcode="#7E41A2" />
        <ParentToChild title="#C14911" color="BROWN" hashcode="#C14911" />
      </div>
    </>
  );
}

export default App;
