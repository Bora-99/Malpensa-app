import React from 'react'
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function Comp5form(props) {
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
            <Label className="mr-sm-2">Nome</Label>
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
    </div>
  );
}
