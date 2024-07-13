import "../styles/Form.css";

function FormTitle({ onClick, title, activeSection, section }) {
  return (
    <button className="btn-expand" onClick={onClick}>
      <div className="form-title">{title}</div>
      <span className="expand">{section !== activeSection ? "+" : "-"}</span>
    </button>
  );
}

export default FormTitle;
