import "../styles/Form.css";

function FormGeneralInformation({ generalInfo, onChange }) {
  return (
    <div className="form">
      <div className="form-title">General Information</div>
      <form action="#" className="flex flex-col gap-3">
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
    </div>
  );
}

export default FormGeneralInformation;
