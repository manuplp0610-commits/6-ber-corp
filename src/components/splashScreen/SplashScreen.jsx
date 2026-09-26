import { useEffect, useState } from "react";
import "./splashScreen.css";
import logo from "../../../public/logoLarg.webp";

export default function SplashScreen() {
  const [splashScreenState, setSplashScreenState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashScreenState(false);
    }, 3000);
  }, []);

  return (
    <>
      {splashScreenState && (
        <div className="splashScreen">
          <img fetchpriority="high" src={logo} alt="logo 6-Ber Corp" />
        </div>
      )}
    </>
  );
}
