import "./header.css";

export default function Header({ variant = "default" }) {
  return <header className={`header header--${variant}`}></header>;
}
