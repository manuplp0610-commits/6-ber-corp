import "./login.css";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("/data/dataClient.json")
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === data[0].username && password === data[0].password) {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/dashbord");
    } else {
      alert("Mauvais identifiant ou mot de passe, veuillez réessayer.");
    }
  };

  return (
    <section className="login-page">
      <section className="login-card">
        <div className="login-header">
          <h1>Connexion</h1>
          <p>Accédez à votre espace administrateur.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label htmlFor="email">Adresse e-mail</label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Votre adresse e-mail"
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Mot de passe</label>

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Votre mot de passe"
            />
          </div>

          <button type="submit" className="login-button">
            Se connecter
          </button>
        </form>
      </section>
    </section>
  );
}
