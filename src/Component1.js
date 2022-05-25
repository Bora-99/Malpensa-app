import React from 'react'
import "./Component1.css";
import { ImLocation } from "react-icons/im";

export default function Component01 () {
  return (
    <div className="component1content">
      <div className='name'     
      >
        <ImLocation /> ParkingGo Malpensa
      </div>
      <div
        style={{
          color: "#09425A",
          padding: "23px",
        }}
      >
        <a
          href="#"
          class="alert-link"
          style={{ color: "#09425A", fontSize: "12px" }}
        >
          Modifica Negozio
        </a>
      </div>
    </div>
  );
}
