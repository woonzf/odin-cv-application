import { useState } from "react";
import FormGeneralInfo from "./FormGeneralInfo";
import "../styles/Form.css";

function FormSection({ title, data, onChange }) {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div className="form">
      <button
        className="flex justify-between"
        onClick={() => {
          setIsOpen(+!isOpen);
        }}
      >
        <div className="form-title">{title}</div>
        <span className="h-full aspect-square">{isOpen === 0 ? "+" : "-"}</span>
      </button>
      {isOpen === 1 && title === "General Information" && (
        <FormGeneralInfo generalInfo={data} onChange={onChange} />
      )}
    </div>
  );
}

export default FormSection;
