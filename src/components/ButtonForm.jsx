function ButtonForm({ title, type, onClick }) {
  return (
    <button
      type="button"
      className={type === 0 ? "btn-form" : "btn-form-delete"}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default ButtonForm;
