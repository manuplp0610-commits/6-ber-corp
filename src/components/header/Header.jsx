import "./header.css";
import logo from "../../assets/images/logo.png";

export default function Header({ variant = "default" }) {
  return <header className={`header header--${variant}`}></header>;
}
