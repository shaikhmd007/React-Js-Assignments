const Color_Box = (props) => {
  console.log(props);
  const Styling = {
    backgroundColor: props.color,
    display: "inline-block",
    height: "100px",
    width: "100px",
  };
  return <div style={Styling}> </div>;
};
export default Color_Box;
