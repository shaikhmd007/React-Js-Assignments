import React from "react";
import "./ParentToChild.css";

//inline sttyling
// const inline = {
//   fontSize: "299px",
//   color: "red",
// };

function ParentToChild(props) {
  // console.log(props);
  return (
    <div className="main">
      <div className="cards" style={{ backgroundColor: props.hashcode }}>
        <div className="title">
          <h6>{props.title}</h6>
          <p>{props.color}</p>
        </div>
      </div>

      {/* <h2 style={inline}>RED COLOR</h2> */}
    </div>
  );

  {
    /* <div className="cards">
        <div className="title">
          <h6>#FF6663</h6>
          <p>PINK</p>
        </div>
      </div>
      <div className="cards">
        <div className="title">
          <h6>#FF6663</h6>
          <p>PINK</p>
        </div>
      </div>

      <div className="cards">
        <div className="title">
          <h6>#FF6663</h6>
          <p>PINK</p>
        </div>
      </div>
      <div className="cards">
        <div className="title">
          <h6>#FF6663</h6>
          <p>PINK</p>
        </div>
      </div> */
  }
}

export default ParentToChild;
