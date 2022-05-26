import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function Checkbox () {
   
    return (
      <Form>
        <FormGroup check inline>
          <Label check style={{ marginTop:"20px" }}>
            <Input type="checkbox" /> Ho preso visione dell’informativa sul
            trattamento dei miei dati personali e i Termini e Condizioni
            *(leggi)
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check >
            <Input type="checkbox" /> Ho preso visione dell’informativa sul
            trattamento dei miei dati personali e do il consenso al loro
            trattamento da parte di Medispa S.r.l. quale unico Responsabile
            Esterno del trattamento dei dati sanitari. * (leggi)
          </Label>
        </FormGroup>
      </Form>
    );
  }

