import { useState } from "react";
import FormTitle from "./FormTitle";
import ButtonForm from "./ButtonForm";
import "../styles/Form.css";

function FormGeneralInfo({
  title,
  data,
  onChange,
  section,
  activeSection,
  onOpen,
}) {
  function handleIsOpenChange() {
    if (activeSection === section) onOpen(0);
    else onOpen(section);
  }

  function Form({ data, onChange, onOpenChange }) {
    const [info, setInfo] = useState(data);

    function handleInfoChange(e) {
      const target = e.target;
      setInfo({ ...info, [target.id]: target.value });
    }

    function handleInfoCancel(e) {
      e.preventDefault();
      setInfo(data);
      onOpenChange();
    }

    function handleInfoUpdate(e) {
      e.preventDefault();
      onChange(info);
      onOpenChange();
    }

    return (
      <form action="#" className="form pt-0">
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
        <div className="flex justify-end gap-1">
          <ButtonForm title="Cancel" type={0} onClick={handleInfoCancel} />
          <ButtonForm title="Save" type={0} onClick={handleInfoUpdate} />
        </div>
      </form>
    );
  }

  return (
    <section className="form-section">
      <FormTitle
        onClick={handleIsOpenChange}
        title={title}
        activeSection={activeSection}
        section={section}
      />
      {activeSection === section && (
        <Form
          data={data}
          onChange={onChange}
          onOpenChange={handleIsOpenChange}
        />
      )}
    </section>
  );
}

export default FormGeneralInfo;
