import React from 'react';
import { Button } from "reactstrap";
import Comp5form from './Comp5form';
import ButtonAvanti from './ButtonAvanti';
import { BsPeopleFill, BsFillPersonFill } from "react-icons/bs";

export default function Component5 () {
  return (
    <div>
      <div>
        <p style={{ color: "#09425A", fontSize: "18px" }}>
          A chi dovrà essere intestata la fattura?
        </p>
      </div>
      <Button
        style={{
          backgroundColor: "#D0D8DA",
          height: "70px",
          width: "200px",
          marginBottom: "30px",
        }}
      >
        <BsPeopleFill /> Azienda
      </Button>
      <Button
        style={{
          backgroundColor: "#0FB7B6",
          height: "70px",
          width: "200px",
          marginLeft: "10px",
          marginBottom: "30px",
        }}
      >
        <BsFillPersonFill /> Privato
      </Button>
      <div>
        <Comp5form />

        <ButtonAvanti text={"Verifica"}></ButtonAvanti>
      </div>
    </div>
  );
}
    
      
      