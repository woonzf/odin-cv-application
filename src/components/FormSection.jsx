import { useState } from "react";
import FormGeneralInfo from "./FormGeneralInfo";
import FormEducation from "./FormEducation";
import "../styles/Form.css";

function FormSection({ title, data, onChange }) {
  const [isOpen, setIsOpen] = useState(0);

  function handleIsOpenChange() {
    setIsOpen(+!isOpen);
  }

  return (
    <div className="form-section">
      <button className="btn-expand" onClick={handleIsOpenChange}>
        <div className="form-title">{title}</div>
        <span className="expand">{isOpen === 0 ? "+" : "-"}</span>
      </button>
      {isOpen === 1 && title === "General Information" && (
        <FormGeneralInfo
          generalInfo={data}
          onChange={onChange}
          onCancel={handleIsOpenChange}
        />
      )}
      {isOpen === 1 && title === "Education" && (
        <FormEducation education={data} onChange={onChange} />
      )}
    </div>
  );
}

export default FormSection;
