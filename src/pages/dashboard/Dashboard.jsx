import "./dashboard.css";
import { useState } from "react";
import DashHome from "../../components/dashboardSection/dashHome/DashHome";
import DashShop from "../../components/dashboardSection/dashShop/DashShop";
import DashBar from "../../components/dashboardSection/dashBar/DashBar";
import DashConsole from "../../components/dashboardSection/dashConsoles/DashConsole";
import DashComputer from "../../components/dashboardSection/dashComputer/DashComputer";
import DashEvent from "../../components/dashboardSection/dashEvent/DashEvent";

export default function Dashboard() {
  const [selectedSection, setSelectedSection] = useState("dashHome");
  const handleClick = (value) => {
    setSelectedSection(value);
  };
  return (
    <section className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <span className="dashboard-eyebrow">Espace administrateur</span>

          <h1>Dashboard</h1>

          <p>
            Gérez le contenu de votre établissement et consultez les
            informations importantes de votre activité.
          </p>
        </div>

        <div className="dashboard-user">
          <span className="dashboard-user-icon">👤</span>

          <div>
            <strong>Administrateur</strong>
            <span>6 Ber-Corp</span>
          </div>
        </div>
      </section>

      <section className="dashboard-nav">
        <ul className="dashboard-nav-elements">
          <li
            className={selectedSection === "dashHome" ? "active" : ""}
            onClick={() => handleClick("dashHome")}
          >
            <i className="fa-solid fa-house"></i>
          </li>

          <li
            className={selectedSection === "dashShop" ? "active" : ""}
            onClick={() => handleClick("dashShop")}
          >
            <i className="fa-solid fa-shop"></i>
          </li>

          <li
            className={selectedSection === "dashBar" ? "active" : ""}
            onClick={() => handleClick("dashBar")}
          >
            <i className="fa-solid fa-burger"></i>
          </li>

          <li
            className={selectedSection === "dashConsole" ? "active" : ""}
            onClick={() => handleClick("dashConsole")}
          >
            <i className="fa-solid fa-gamepad"></i>
          </li>

          <li
            className={selectedSection === "dashComputer" ? "active" : ""}
            onClick={() => handleClick("dashComputer")}
          >
            <i className="fa-solid fa-computer-mouse"></i>
          </li>

          <li
            className={selectedSection === "dashEvent" ? "active" : ""}
            onClick={() => handleClick("dashEvent")}
          >
            <i className="fa-regular fa-calendar-days"></i>
          </li>
        </ul>
      </section>
      {selectedSection === "dashHome" && <DashHome />}
      {selectedSection === "dashShop" && <DashShop />}
      {selectedSection === "dashBar" && <DashBar />}
      {selectedSection === "dashConsole" && <DashConsole />}
      {selectedSection === "dashComputer" && <DashComputer />}
      {selectedSection === "dashEvent" && <DashEvent />}
    </section>
  );
}
