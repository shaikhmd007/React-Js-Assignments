/* 
## Assignment:
- Create a React application.
- In that, create a component called as colorBox.
- Reuse that component 4-5 times.
- Every time, pass a unique color as a prop.
- Change the color of that colorbox div into whatever is passed as prop.
 */
import Color_Box from "./Color_component/Color_Box";
function App() {
  const colors = ["red", "green", "blue", "lime", "yellow"];
  return (
    <div>
      {/* <Color_Box color="" />
      <Color_Box color="red" />
      <Color_Box color="" />
      <Color_Box color="lime" />
      <Color_Box color="" />
      <Color_Box color="Blue" />
      <Color_Box color="" /> */}
      {colors.map((item, idx) => {
        return <Color_Box color={item} key={idx} />;
      })}
    </div>
  );
}

export default App;
