import React from "react";

export default function Box(props) {
  let [on, setOn] = React.useState(props.on);

  let styles = {
    backgroundColor: on ? "#222222" : "#cccccc",
  };

  function flipColor() {
    setOn((prevOn) => {
      return (prevOn = !prevOn);
    });
  }
  return <div className="box" onClick={flipColor} style={styles}></div>;
}
