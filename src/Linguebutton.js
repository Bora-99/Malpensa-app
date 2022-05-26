import "./Linguebutton.css";
import Flag from "react-world-flags";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Linguebutton() {
  return (
    <div style={{ paddingRight: "80px" }}>
      <UncontrolledDropdown>
        <DropdownToggle style={{ display: "flex" }}>
          <Flag
            code={"IT"}
            width={"20px"}
            height={"20px"}
            style={{ marginRight: "2%" }}
          />
          Italiano
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem text>Italiano</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}

export default Linguebutton;
