import "./dashboard.css";

import { useState } from "react";

import DashHome from "../../components/dashboardSection/dashHome/DashHome";
import DashShop from "../../components/dashboardSection/dashShop/DashShop";
import DashBar from "../../components/dashboardSection/dashBar/DashBar";
import DashConsole from "../../components/dashboardSection/dashConsoles/DashConsole";
import DashComputer from "../../components/dashboardSection/dashComputer/DashComputer";
import DashEvent from "../../components/dashboardSection/dashEvent/DashEvent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouse,
  faShop,
  faBurger,
  faGamepad,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";

import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

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
            <span>Le Jenks</span>
          </div>
        </div>
      </section>

      <section className="dashboard-nav">
        <ul className="dashboard-nav-elements">
          <li
            className={selectedSection === "dashHome" ? "active" : ""}
            onClick={() => handleClick("dashHome")}
          >
            <FontAwesomeIcon icon={faHouse} />
          </li>

          <li
            className={selectedSection === "dashShop" ? "active" : ""}
            onClick={() => handleClick("dashShop")}
          >
            <FontAwesomeIcon icon={faShop} />
          </li>

          <li
            className={selectedSection === "dashBar" ? "active" : ""}
            onClick={() => handleClick("dashBar")}
          >
            <FontAwesomeIcon icon={faBurger} />
          </li>

          <li
            className={selectedSection === "dashConsole" ? "active" : ""}
            onClick={() => handleClick("dashConsole")}
          >
            <FontAwesomeIcon icon={faGamepad} />
          </li>

          <li
            className={selectedSection === "dashComputer" ? "active" : ""}
            onClick={() => handleClick("dashComputer")}
          >
            <FontAwesomeIcon icon={faComputerMouse} />
          </li>

          <li
            className={selectedSection === "dashEvent" ? "active" : ""}
            onClick={() => handleClick("dashEvent")}
          >
            <FontAwesomeIcon icon={faCalendarDays} />
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
