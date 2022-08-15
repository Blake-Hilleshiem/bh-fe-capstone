function Calendar() {
  function renderRow() {
    const arr = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
    return ["Su", "M", "Tu", "W", "Th", "F", "Sa"].map((arr, i) => {
      return (
        <div key={i + 1} style={{ marginLeft: "10px" }}>
          {arr}
        </div>
      );
    });
  }
  function renderRow() {
    const arr = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
    return ["Su", "M", "Tu", "W", "Th", "F", "Sa"].map((arr, i) => {
      return (
        <div key={i + 1} style={{ marginLeft: "10px" }}>
          {arr}
        </div>
      );
    });
  }

  return (
    <div className="widget-page-content-container">
      <h1>Hello from Calendar</h1>
      <div style={{ display: "flex" }}>{renderRow()}</div>
    </div>
  );
}

export default Calendar;
