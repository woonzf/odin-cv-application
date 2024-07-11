import "../styles/Form.css";

function FormEducation({ education, onChange }) {
  return (
    <form action="#" className="form">
      <div className="input-section">
        <label htmlFor="school">School Name</label>
        <input id="school" value={education.school} onChange={onChange} />
      </div>
      <div className="input-section">
        <label htmlFor="title">Title of Study</label>
        <input id="title" value={education.title} onChange={onChange} />
      </div>
      <div className="input-section">
        <label htmlFor="date">Graduation Date</label>
        <input
          type="date"
          id="date"
          value={education.date}
          onChange={onChange}
        />
      </div>
    </form>
  );
}

export default FormEducation;
