import React from "react";
import { useState } from "react";
import "../App.css";
const GeneratePassWd = () => {
  const [output, setOutput] = useState("**🔐** ");

  //checking the Cases are correct or not
  let PassWdlength = 0;
  let CheckUpperCase = false;
  let CheckLowerCase = false;
  let CheckNumbers = false;
  let CheckSymbols = false;

  const Generator = () => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWX";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";
    let mixedPassWd = "";
    let lengthSelected = PassWdlength;
    let RandomPassWd = "";

    //checking the selected checkbox values are working or not by conditions
    if (CheckUpperCase == true) {
      mixedPassWd = mixedPassWd + upperCase;
    }
    if (CheckLowerCase == true) {
      mixedPassWd = mixedPassWd + lowerCase;
    }
    if (CheckNumbers == true) {
      mixedPassWd = mixedPassWd + numbers;
    }
    if (CheckSymbols == true) {
      mixedPassWd = mixedPassWd + symbols;
    }

    for (let i = 0; i < lengthSelected; i++) {
      let index = Math.floor(Math.random() * mixedPassWd.length + 1);
      RandomPassWd = RandomPassWd + mixedPassWd.charAt(index);
    }

    setOutput(RandomPassWd);
    console.log(RandomPassWd);
  };

  // const Selectedlength = () => {};

  return (
    <div className="container">
      <h2>🔑Password Generator</h2>
      <input type="text" value={output} className="output" disabled />
      <button className="Copy">Copy</button>
      <br />
      {/* select Password length here */}
      <span className="span">Select Password Length</span>
      <select
        onChange={(e) => {
          PassWdlength = e.target.value;
        }}
        className="drpdwn"
      >
        <option value="0">0</option>
        {/* <option value="1">1</option> */}
        {/* <option value="2">2</option> */}
        {/* <option value="3">3</option> */}
        <option value="4">4</option>
        {/* <option value="5">5</option> */}
        <option value="6">6</option>
        {/* <option value="7">7</option> */}
        <option value="8">8</option>
        {/* <option value="9">9</option> */}
        <option value="10">10</option>
        {/*         
        <option value="16">16</option>
      <option value="20">20</option> */}
      </select>
      <br />
      {/* CheckBoxes starts and its functionalities*/}
      <input
        type="checkbox"
        id="upper"
        onClick={() => {
          CheckUpperCase = !CheckUpperCase;
        }}
      />
      <label htmlFor="upper">Include uppercase letters</label>
      <br />
      <input
        type="checkbox"
        onClick={() => {
          CheckLowerCase = !CheckLowerCase;
        }}
      />
      <span>Include lowercase letters</span>
      <br />
      <input
        type="checkbox"
        onClick={() => {
          CheckNumbers = !CheckNumbers;
        }}
      />
      <span>Include numbers</span>
      <br />
      <input
        type="checkbox"
        onClick={() => {
          CheckSymbols = !CheckSymbols;
        }}
      />
      <span>Include symbols</span>
      <br />
      <button className="GenerateBtn" onClick={Generator}>
        Generate PasssWord
      </button>
    </div>
  );
};

export default GeneratePassWd;
