import { useState } from "react";
import "../styles/Form.css";

function FormGeneralInfo({ generalInfo, onChange, onCancel }) {
  const [info, setInfo] = useState(generalInfo);

  function handleInfoChange(e) {
    const target = e.target;
    setInfo({ ...info, [target.id]: target.value });
  }

  function handleInfoUpdate() {
    onChange(info);
    onCancel();
  }

  return (
    <>
      <form action="#" className="form">
        <div className="input-section">
          <label htmlFor="name">Name</label>
          <input id="name" value={info.name} onChange={handleInfoChange} />
        </div>
        <div className="input-section">
          <label htmlFor="email">Email</label>
          <input id="email" value={info.email} onChange={handleInfoChange} />
        </div>
        <div className="input-section">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" value={info.phone} onChange={handleInfoChange} />
        </div>
      </form>
      <div className="flex justify-end gap-1">
        <button className="btn-form" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn-form" onClick={handleInfoUpdate}>
          Save
        </button>
      </div>
    </>
  );
}

export default FormGeneralInfo;
