// Calculator.jsx
import React, { useState } from "react";
import Display from "./Display.jsx";
import Buttons from "./Buttons.jsx";

function Calculator() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [operator, setOperator] = useState("");
  const [flag, setFlag] = useState(true);

  const number = (val) => {
    if (operator === "") {
      setVal1(val1.concat(val));
    } else {
      setVal2(val2.concat(val));
    }
  };

  const cancel = () => {
    setVal1("");
    setVal2("");
    setOperator("");
    setFlag(true);
  };

  const cal = () => {
    if (val1 === "") {
      setOperator("");
      return;
    }
    if (val2 === "") {
      return;
    }
    let result;
    if (operator === "+") {
      result = parseFloat(val1) + parseFloat(val2);
    } else if (operator === "-") {
      result = parseFloat(val1) - parseFloat(val2);
    } else if (operator === "×") {
      result = parseFloat(val1) * parseFloat(val2);
    } else if (operator === "/") {
      if (val2 === "0") {
        result = "Can't divide";
      } else {
        result = parseFloat(val1) / parseFloat(val2);
      }
    } else if (operator === "%") {
      result = (parseFloat(val2) / 100) * parseFloat(val1);
    }
    setVal1(result.toString());
    setVal2("");
    setOperator("");
  };

  const symbol = (val) => {
    if (val1 === "") {
      setOperator("");
      return;
    }
    if (operator !== "") {
      if (val2 === "") {
        return;
      } else {
        cal();
        setOperator(val);
      }
    } else {
      setOperator(val);
      setVal1(val1 + " " + val + " ");
    }
  };

  const changeSign = () => {
    if (operator === "") {
      if (flag) {
        setVal1(`-${val1}`);
        setFlag(false);
      } else {
        setVal1(val1.substring(1));
        setFlag(true);
      }
    } else {
      if (flag) {
        setVal2(`-${val2}`);
        setFlag(false);
      } else {
        setVal2(val2.slice(1));
        setFlag(true);
      }
    }
  };

  return (
    <div id="calculator">
      <div id="logo">
        <h3>CALCULATOR</h3>
      </div>
      <Display val1={val1} val2={val2} />
      <Buttons
        number={number}
        cancel={cancel}
        cal={cal}
        symbol={symbol}
        changeSign={changeSign}
      />
    </div>
  );
}

export default Calculator;
