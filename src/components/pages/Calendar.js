function Calendar() {
  function renderRow() {
    return ["", "", "", "", "", "", ""].map((_, i) => {
      return (
        <div key={i + 1} style={{ marginLeft: "10px" }}>
          {i + 1}
        </div>
      );
    });
  }

  return (
    <div>
      <h1>Hello from Calendar</h1>
      <div style={{ display: "flex" }}>{renderRow()}</div>
    </div>
  );
}

export default Calendar;
