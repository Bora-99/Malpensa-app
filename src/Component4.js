import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "./Component4.css";
import Checkbox from "./Checkbox";
import ButtonAvanti from "./ButtonAvanti";

export default function Component4 () {
   
    return (
      <div>
        <Form>
          <div
            className="forms"
            style={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: "120px",
            }}
          >
            <FormGroup inline className="inputnome">
              <Label className="mr-sm-5">Nome</Label>
              <Input type="name" name="nome" id="exampleNome" />
            </FormGroup>
            <FormGroup inline className="inputnome">
              <Label className="mr-sm-2">Cognome</Label>
              <Input type="password" name="password" id="exampleCognome" />
            </FormGroup>
            <FormGroup inline className="inputnome">
              <Label className="mr-sm-2">Email</Label>
              <Input type="name" name="nome" id="exampleNome" />
            </FormGroup>
            <FormGroup inline className="inputnome">
              <Label className="mr-sm-2">Nacionalita</Label>
              <Input type="name" name="nome" id="exampleNome" />
            </FormGroup>
            <FormGroup inline className="inputnome">
              <Label className="mr-sm-2">Data di nascita</Label>
              <Input type="name" name="nome" id="exampleNome" />
            </FormGroup>
            <FormGroup inline className="inputnome">
              <Label className="mr-sm-2">Comune residenca</Label>
              <Input type="name" name="nome" id="exampleNome" />
            </FormGroup>
{/* <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
              <label class="form-check-label" for="inlineRadio1">1</label>
              </div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">2</label>
</div> */}
            <FormGroup inline className="inputnome">
              <Label className="mr-sm-2">Indrizzo</Label>
              <Input type="name" name="nome" id="exampleNome" />
            </FormGroup>
          </div>
        </Form>
        <Checkbox />
        <ButtonAvanti text={"Avanti"} />
      </div>
    );
  }

