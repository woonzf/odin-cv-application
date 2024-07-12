import "../styles/Form.css";

function FormTitle({ onClick, title, isOpen }) {
  return (
    <button className="btn-expand" onClick={onClick}>
      <div className="form-title">{title}</div>
      <span className="expand">{isOpen === 0 ? "+" : "-"}</span>
    </button>
  );
}

export default FormTitle;
