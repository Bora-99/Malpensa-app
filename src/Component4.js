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
              alignContent: "space-around",
              justifyContent: "space-between",
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

