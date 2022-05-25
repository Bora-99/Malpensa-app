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
    <div>
      <UncontrolledDropdown>
        <DropdownToggle caret>
          <Flag code={ "IT" } width={ "3%" } height={ "5%" } style={ {marginRight:'2%'}}/>
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
