import "./App.css";
import { useState } from "react";

function App() {
  let trackLikes = useState(0);
  const Likes = trackLikes[0];

  const updatedLikes = trackLikes[1];
  const LikesCounter = (_) => {
    updatedLikes((current_value) => {
      const new_value = current_value + 1;
      return new_value;
    });

    // const updatedLikes = trackLikes[1];
    //   const DislikeCounter = () => {
    //     updatediLikes((current_value) => {
    //       const new_value = current_value + 1;
    //       return new_value;
    //     });
    //   };
  };

  return (
    <div className="App">
      <button onClick={LikesCounter}>Likes👍</button>
      <span> {Likes}</span>
      {/* 
      <button onClick={LikesCounter}>Dislikes👎</button>
      <p> {Likes}👎</p> */}
    </div>
  );
}

export default App;
