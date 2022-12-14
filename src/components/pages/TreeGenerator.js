import { useState } from "react";

function Calendar() {
  const [height, setHeight] = useState(6);

  function generateArray(num) {
    let char = "*";
    const newArr = ["*"];

    if (num < 3) {
      num = 3;
    } else if (num > 100) {
      num = 110;
    } else if (isNaN(num) == true) {
      num = 3;
    } else if (Number.isInteger(Number(num)) == false) {
      num = Math.floor(num);
    }

    for (let i in Array(Number(num - 1)).fill("")) {
      char += " *";
      newArr.push(char);
    }

    return newArr;
  }

  function RenderTree(arr) {
    return arr.map((el, index) => {
      return (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            color: "darkgreen",
          }}
        >
          {el}
        </div>
      );
    });
  }

  function RenderTrunk() {
    return Array(3)
      .fill("* * *")
      .map((el, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              color: "brown",
            }}
          >
            {el}
          </div>
        );
      });
  }

  function handleOnChange(e) {
    setHeight(e.target.value);
  }

  return (
    <div className="widget-page-content-container">
      <h1>Tree generator:</h1>
      <div style={{ marginBottom: "10px" }}>Enter a number between 3 - 100</div>
      <input
        type="text"
        value={height}
        onChange={handleOnChange}
        style={{ textAlign: "center" }}
      />
      <div style={{ marginBottom: "40px", marginTop: "10px" }}>
        {height < 3
          ? "(We'll need a value greater than 2, otherwise you'd get a diamond or a stick. We're all about trees here.)"
          : height == 44
          ? "mmmhmm, that's a nice looking tree"
          : height > 100
          ? "That's too much tree"
          : "What does a 44 `*` tall tree look like? Let's find out!"}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {RenderTree(generateArray(height))}
        {Number(height) >= 12 ? RenderTrunk() : "*"}
      </div>
    </div>
  );
}
export default Calendar;
