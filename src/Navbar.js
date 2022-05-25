import "./Navbar.css";
import img1 from "./images/logo.png";
import Linguebutton from "./Linguebutton";

function Navbar() {
  return (
    <div className="navbar">
      <nav class="navbar">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "5%",
            marginTop: "1%",
          }}
        >
          <a
            class="navbar-brand"
            className="navbrand-logo"
            href="#"
            style={{ display: "contents" }}
          >
            <img
              src={img1}
              width="35%"
              height="35%"
              style={{ borderRadius: "10%", marginRight: "5%" }}
            />
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
        <Linguebutton />
      </nav>
    </div>
  );
}

export default Navbar;
