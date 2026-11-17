import { useEffect, useState } from "react";

import "./splashScreen.css";

const logo = `${import.meta.env.BASE_URL}logoLarg.webp`;

export default function SplashScreen() {
  const [splashScreenState, setSplashScreenState] = useState(
    !window.splashShown,
  );

  useEffect(() => {
    if (window.splashShown) return;

    const timer = setTimeout(() => {
      window.splashShown = true;
      setSplashScreenState(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {splashScreenState && (
        <div className="splashScreen">
          <img
            width="300"
            height="300"
            fetchpriority="high"
            src={logo}
            alt="logo 6-Ber Corp"
          />

          <h1 className="hero-eyebrow">Bienvenue chez 6 Ber Corp ...</h1>
        </div>
      )}
    </>
  );
}
