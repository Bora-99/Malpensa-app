import React from 'react'
import img2 from "./images/americanexpres.png";
import img3 from "./images/mastercard.png";
import img4 from "./images/visalogo.png";
import img5 from "./images/paypal.png";
import ButtonAvanti from './ButtonAvanti';
import Checkbox from './Checkbox';
import "./Component6.css";

export default function Component6() {
    return (
      <div>
        <div class="form-check">
          <input class="form-check-input" type="radio" id="flexRadioDefault1" />
          <label>Carta di credito</label>
          <div className="pagamento">
            <img src={ img4 } width="3%" height="10%" />
            <img src={ img2 } width="3%" height="10%" />

            <img src={img3} width="3%" height="10%" />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#F0F4F5",
            Width: "800px",
            height: "300px",
            borderRadius: "5px",
            marginTop: "50px",
          }}
        >
          <form class="row">
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Provinzia
              </label>
              <input type="text" class="form-control" id="inputAddress" />
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
        <div class="form-check" className="radiobutton">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            PayPal <img src={img5} width="5%" height="10%" /> Che cos`e PayPal?
          </label>
        </div>
        <div class="form-check" className="radiobuttonsec">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Google PayPal
          </label>
        </div>
        <Checkbox />
        <ButtonAvanti
          text={"CONFERMA E PAGA"}
          style={{ backgroundColor: " #16C5B3" }}
        />
      </div>
    );
}
