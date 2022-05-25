import "./App.css";
import Component1 from "./Component1";
import Navbar from "./Navbar";
import Component2 from "./Component2";
import CustomButton from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";
import Component6 from "./Component6";
import Footer from "./Footer";
import { BsArrowLeftCircle } from "react-icons/bs";

function App() {
  const array = [
    { text: "lunedi", disable: true },
    { text: "lunedi", disable: true },
    { text: "lunedi", disable: false },
    { text: "lunedi", disable: false },
    { text: "lunedi", disable: false },
    { text: "lunedi", disable: false },
    { text: "lunedi", disable: false },
    { text: "lunedi", disable: false },
    { text: "lunedi", disable: false },
  ];
    const arrayTime = [
      { text: "10:00", disable: true },
      { text: "lunedi", disable: true },
      { text: "lunedi", disable: false },
      { text: "lunedi", disable: false },
      { text: "lunedi", disable: false },
      { text: "lunedi", disable: false },
      { text: "lunedi", disable: false },
      { text: "lunedi", disable: false },
      { text: "lunedi", disable: false },
    ];
  return (
    <div>
      <Navbar />
      <div
        style={{
          marginLeft: "100px",
          marginTop: "80px",
          fontFamily: "Poppins",
        }}
      >
        <BsArrowLeftCircle size={40} />
      </div>
      <div className="bodystyle">
        <div className="paragrafi1">
          <p style={{ color: "#09425A", fontSize: "35px" }}>
            PRENOTA SERVIZIONI STORE
          </p>
        </div>
        <div className="pagrafi2">
          <p>
            All`interno delle strutture e dei mezzi ParkinGO è necessario
            indossare la mascherina e rispettare la distanza di sicurezza
            interpersonale.
          </p>
        </div>
        <div>
          <p
            style={{
              color: "#09425A",
              fontSize: "22px",
              fontWeight: "bold",
              marginTop: "40px",
            }}
          >
            01. Prenota ora i tamponi in Drive-in
          </p>
        </div>
        <Component1 />
        <div>
          <p
            style={{
              color: "#09425A",
              fontSize: "22px",
              fontWeight: "bold",
              marginTop: "40px",
            }}
          >
            02. Prenota ora i tamponi in Drive-in
          </p>
        </div>
        <div className="dashboardbox">
          <Component2 />
          <Component2 />
        </div>
        <div>
          <p
            style={{
              color: "#09425A",
              fontSize: "22px",
              marginTop: "40px",
              fontWeight: "bold",
            }}
          >
            03. Scegli fra le date e orari disponibili
          </p>
          <div
            className="CustomButton"
            style={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "auto",
              flexWrap: "wrap",
            }}
          >
            {array.map((el) => (
              <CustomButton disable={el.disable} text={el.text} />
            ))}
          </div>
          <div
            className="CustomButton"
            style={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "auto",
              flexWrap: "wrap",
            }}
          >
            {arrayTime.map((el) => (
              <CustomButton disable={el.disable} text={el.text} />
            ))}
          </div>
        </div>
        <div>
          <p
            style={{
              color: "#09425A",
              fontSize: "22px",
              marginTop: "40px",
              fontWeight: "bold",
            }}
          >
            04. Dati anagrafici{" "}
          </p>
        </div>
        <Component4 />
        <div>
          <p
            style={{
              color: "#09425A",
              fontSize: "22px",
              marginTop: "40px",
              fontWeight: "bold",
              marginTop: "40px",
            }}
          >
            05.Tipo di ricevuta
          </p>
        </div>
        <Component5 />
        <div>
          <p style={{ color: "#09425A", fontSize: "22px", marginTop: "40px" }}>
            06. Metodo di pagamento
          </p>
        </div>
        <Component6 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
