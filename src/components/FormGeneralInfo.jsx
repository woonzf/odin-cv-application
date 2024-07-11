import "../styles/Form.css";

function FormGeneralInfo({ generalInfo, onChange }) {
  return (
    <form action="#" className="form">
      <div className="input-section">
        <label htmlFor="name">Name</label>
        <input id="name" value={generalInfo.name} onChange={onChange} />
      </div>
      <div className="input-section">
        <label htmlFor="email">Email</label>
        <input id="email" value={generalInfo.email} onChange={onChange} />
      </div>
      <div className="input-section">
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" value={generalInfo.phone} onChange={onChange} />
      </div>
    </form>
  );
}

export default FormGeneralInfo;
