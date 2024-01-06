// Buttons.jsx
import React from "react";

const Buttons = ({ number, cancel, cal, symbol, changeSign }) => {
  const buttonData = [
    { id: "ac", value: "AC", action: cancel },
    { id: "plus/minus", value: "+/-", action: changeSign },
    { id: "modulus", value: "%", action: () => symbol("%") },
    { id: "division", value: "÷", action: () => symbol("/") },
    { id: "seven", value: "7", action: () => number("7") },
    { id: "eight", value: "8", action: () => number("8") },
    { id: "nine", value: "9", action: () => number("9") },
    { id: "multiply", value: "×", action: () => symbol("×") },
    { id: "four", value: "4", action: () => number("4") },
    { id: "five", value: "5", action: () => number("5") },
    { id: "six", value: "6", action: () => number("6") },
    { id: "minus", value: "-", action: () => symbol("-") },
    { id: "one", value: "1", action: () => number("1") },
    { id: "two", value: "2", action: () => number("2") },
    { id: "three", value: "3", action: () => number("3") },
    { id: "plus", value: "+", action: () => symbol("+") },
    { id: "zero", value: "0", action: () => number("0") },
    { id: "dot", value: ".", action: () => number(".") },
    { id: "equal", value: "=", action: cal },
  ];

  return (
    <div id="button-container">
      {buttonData.map((button) => (
        <div
          key={button.id}
          className="button"
          onClick={button.action}
          id={button.id}>
          <span>{button.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Buttons;
