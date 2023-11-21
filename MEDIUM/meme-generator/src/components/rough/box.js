import React from "react";

export default function Box(props) {
  let styles = {
    backgroundColor: props.on ? "#222222" : "#cccccc",
  };
  return <div className="box" onClick={props.toggle} style={styles}></div>;
}
