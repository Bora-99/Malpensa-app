import React, { useEffect } from "react";
import { Button } from "reactstrap";
import "./App.css";

export const CustomButton = (props) => {
  return (
    <div style={{}}>
      <Button outline disabled={props.disable}>
        {props.text}
      </Button>
    </div>
  );
};

export default CustomButton;
