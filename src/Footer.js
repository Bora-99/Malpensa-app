import React from 'react'
import "./Footer.css"
import img1 from "./images/logo.png";

export default function Footer () {
    return (
      <div
        style={{
          backgroundColor: "#09425A",
          marginTop: "2%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "5%",
            paddingTop: "10px"
          }}
        >
          <a
            class="navbar-brand"
            className="navbrand-logo"
            href="#"
            style={{ display: "contents", marginTop: "2%" }}
          >
            <img src={img1} width="5%" style={{ borderRadius: "10%" }} />
            <div>
              <p className="logostyle" style={{ fontWeight: "bold" }}>
                MEDICAL
              </p>
              <p className="logostyle" style={{ fontWeight: "10%" }}>
                DESK
              </p>
            </div>
          </a>
        </div>
        <div>
          <p className="suporto">Suporto</p>
        </div>

        <div className="contact">
          <p>Adress, Tirana Albania</p>
          <p>Email: online@example.com </p>
          <p> Phone: xxx xxx xxx</p>
        </div>

        <p className="copyright">2021 © Created by New Media Communications </p>
      </div>
    );
}
