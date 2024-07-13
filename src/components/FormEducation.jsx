import { useState } from "react";
import FormTitle from "./FormTitle";
import "../styles/Form.css";

function FormEducation({
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

  function handleItemAdd() {
    const currentIdNew = data[data.length - 1].id + 1;
    const educationItemNew = {
      id: currentIdNew,
      school: "School",
      title: "Title",
      date: "",
    };
    onChange(educationItemNew, "add");
  }

  function FormEducationItems({ item, onChange }) {
    const [isOpen, setIsOpen] = useState(0);
    const [itemCopy, setItemCopy] = useState(item);

    function handleIsOpenChange(e) {
      e.preventDefault();
      setIsOpen(+!isOpen);
    }

    function handleItemChange(e) {
      const target = e.target;
      const itemNew = { ...itemCopy, [target.id]: target.value };
      setItemCopy(itemNew);
    }

    function handleItemDelete(e) {
      e.preventDefault();
      onChange(itemCopy, "del");
    }

    function handleItemCancel(e) {
      e.preventDefault();
      setItemCopy(item);
      setIsOpen(+!isOpen);
    }

    function handleItemUpdate(e) {
      e.preventDefault();
      onChange(itemCopy, "mod");
    }

    return (
      <div className="form-section">
        {isOpen === 0 && (
          <button className="btn-expand py-3" onClick={handleIsOpenChange}>
            <div className="text-start">
              <div>{item.school}</div>
              <small>{item.title}</small>
            </div>
            <span className="expand">{isOpen === 0 ? "+" : "-"}</span>
          </button>
        )}
        {isOpen === 1 && (
          <form action="#" className="form">
            <div className="input-section">
              <label htmlFor="school">School Name</label>
              <input
                id="school"
                value={itemCopy.school}
                onChange={handleItemChange}
              />
            </div>
            <div className="input-section">
              <label htmlFor="title">Title of Study</label>
              <input
                id="title"
                value={itemCopy.title}
                onChange={handleItemChange}
              />
            </div>
            <div className="input-section">
              <label htmlFor="date">Graduation Date</label>
              <input
                type="date"
                id="date"
                value={itemCopy.date}
                onChange={handleItemChange}
              />
            </div>
            <div className="flex justify-between">
              <button className="btn-form-delete" onClick={handleItemDelete}>
                Delete
              </button>
              <div className="flex gap-1">
                <button className="btn-form" onClick={handleItemCancel}>
                  Cancel
                </button>
                <button className="btn-form" onClick={handleItemUpdate}>
                  Save
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
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
        <div className="form pt-0">
          {data.map((item) => {
            return (
              <FormEducationItems
                key={item.id}
                item={item}
                onChange={onChange}
              />
            );
          })}
          <button className="btn-form" onClick={handleItemAdd}>
            Add
          </button>
        </div>
      )}
    </section>
  );
}

export default FormEducation;
