import { useState } from "react";
import "../styles/Form.css";

function FormGeneralInfo({ title, data, onChange }) {
  const [isOpen, setIsOpen] = useState(0);
  const [info, setInfo] = useState(data);

  function handleIsOpenChange() {
    setIsOpen(+!isOpen);
  }

  function handleInfoChange(e) {
    const target = e.target;
    setInfo({ ...info, [target.id]: target.value });
  }

  function handleInfoCancel() {
    setInfo(data);
    handleIsOpenChange();
  }

  function handleInfoUpdate() {
    onChange(info);
    handleIsOpenChange();
  }

  return (
    <div className="form-section">
      <button className="btn-expand" onClick={handleIsOpenChange}>
        <div className="form-title">{title}</div>
        <span className="expand">{isOpen === 0 ? "+" : "-"}</span>
      </button>
      {isOpen === 1 && (
        <>
          <form action="#" className="form">
            <div className="input-section">
              <label htmlFor="name">Name</label>
              <input id="name" value={info.name} onChange={handleInfoChange} />
            </div>
            <div className="input-section">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                value={info.email}
                onChange={handleInfoChange}
              />
            </div>
            <div className="input-section">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                value={info.phone}
                onChange={handleInfoChange}
              />
            </div>
          </form>
          <div className="flex justify-end gap-1">
            <button className="btn-form" onClick={handleInfoCancel}>
              Cancel
            </button>
            <button className="btn-form" onClick={handleInfoUpdate}>
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default FormGeneralInfo;
