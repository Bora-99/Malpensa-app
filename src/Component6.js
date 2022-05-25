import React from 'react'

import ButtonAvanti from './ButtonAvanti';
import Checkbox from './Checkbox';
import { SiVisa } from "react-icons/si";
import "./Component6.css";

export default function Component6() {
    return (
      <div>
        <div class="form-check">
          <input class="form-check-input" type="radio" id="flexRadioDefault1" />
          <label>Carta di credito</label>

          <SiVisa />
        </div>
        <div
          style={{
            backgroundColor: "#F0F4F5",
            Width: "1000px",
            height: "300px",
            borderRadius: "5px",
            marginTop: "50px",
          }}
        >
          <form class="row g-3 ">
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Provinzia
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
              />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Data di scadenza
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                CVC/CVV
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>

            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Nome sualla carta
              </label>
              <input type="text" class="form-control" id="inputAddress2" />
            </div>
          </form>
        </div>
        <Checkbox />
        <ButtonAvanti
          text={"CONFERMA E PAGA"}
          style={{ backgroundColor: " #16C5B3" }}
        />
      </div>
    );
}
