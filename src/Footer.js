import React from 'react'
import "./Footer.css"

export default function Footer () {
    return (
      <div
        style={{
          backgroundColor: "#09425A",
          height: "110px",
          marginTop: "90px",
        }}
        >
            
        <p className="suporto">Suporto</p>
        <p className='adress'>
                Adress, Tirana, Albania
                Email: online@example.com
                Phone: xxx xxx xxx
          xxx
        </p>
        <p className="copyright">2021 © Created by New Media Communications </p>
      </div>
    );
}
