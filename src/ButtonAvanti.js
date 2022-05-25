import React from 'react'
import { Button } from "reactstrap";

export default function ButtonAvanti(props) {
  return (
    <Button
      style={{
        width: "200px",
        height: "50px",
        borderRadius: "50px",
        backgroundColor: "#D0D8DA",
        marginTop: "50px",
      }}
    >
      { props.text }
    </Button>
  );
}
