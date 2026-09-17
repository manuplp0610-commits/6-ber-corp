import "./headerPages.css";
export default function HeaderPages({ title, subTitle }) {
  return (
    <div className="headerPages">
      <h1 className="headerPagesTitle">{title}</h1>

      <p>{subTitle}</p>
    </div>
  );
}
