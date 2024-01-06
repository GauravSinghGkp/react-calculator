// Display.jsx
import React from "react";

function Display({ val1, val2, ans }) {
  console.log(val1, val2);
  return (
    <div id="display">
      <p id="value">
        {val1} {val2}
      </p>
    </div>
  );
}

export default Display;
