import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

export default function Component2() {
  return (
    <div className="comp2">
      <div
        style={{
          margin: "10px",
        }}
      >
        <p style={{ color: "#FFFFFF" }}>Tampone Rapido Antigenico </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "-20px",
          }}
        >
          <div
            style={{ color: "#FFFFFF", fontSize: "30px", fontWeight: "bold" }}
          >
            50$
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              QTA
            </p>
            <UncontrolledDropdown style={{ backgroundColor: "none" }}>
              <DropdownToggle style={{ width: "50px" }} caret>
                0
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>sadassas</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
