import { useState } from "react";
import FormGeneralInfo from "./FormGeneralInfo";
import FormEducation from "./FormEducation";
import "../styles/Form.css";

function FormSection({ title, data, onChange }) {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div className="form-section">
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
      {isOpen === 1 && title === "Education" && (
        <FormEducation education={data} onChange={onChange} />
      )}
    </div>
  );
}

export default FormSection;
