import { useState } from "react";
import FormTitle from "./FormTitle";
import SelectSection from "./SelectSection";
import "../styles/Form.css";

function FormExperience({
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
    let currentIdNew = 0;
    if (data.length !== 0) currentIdNew = data[data.length - 1].id + 1;

    const educationItemNew = {
      id: currentIdNew,
      company: "Company",
      position: "Position",
      responsibility: "Responsibility",
      monthStart: "",
      yearStart: "",
      monthEnd: "",
      yearEnd: "",
      present: 0,
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
      let itemNew = null;
      if (target.id === "present")
        itemNew = {
          ...itemCopy,
          ["monthEnd"]: "",
          ["yearEnd"]: "",
          [target.id]: +target.checked,
        };
      else itemNew = { ...itemCopy, [target.id]: target.value };
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
              <div>{item.company}</div>
              <small>{item.position}</small>
            </div>
            <span className="expand">{isOpen === 0 ? "+" : "-"}</span>
          </button>
        )}
        {isOpen === 1 && (
          <form action="#" className="form">
            <div className="input-section">
              <label htmlFor="company">Company Name</label>
              <input
                id="company"
                value={itemCopy.company}
                onChange={handleItemChange}
              />
            </div>
            <div className="input-section">
              <label htmlFor="position">Position Title</label>
              <input
                id="position"
                value={itemCopy.position}
                onChange={handleItemChange}
              />
            </div>
            <div className="input-section">
              <label htmlFor="responsibility">Responsibility</label>
              <div className="textarea-wrapper">
                <textarea
                  rows={5}
                  id="responsibility"
                  value={itemCopy.responsibility}
                  onChange={handleItemChange}
                ></textarea>
              </div>
            </div>
            <div className="input-section">
              <div>Start Date</div>
              <div className="select-my">
                <SelectSection
                  type="monthStart"
                  item={itemCopy}
                  onChange={handleItemChange}
                  disabled={0}
                />
                <SelectSection
                  type="yearStart"
                  item={itemCopy}
                  onChange={handleItemChange}
                  disabled={0}
                />
              </div>
            </div>
            <div className="input-section">
              <div className="flex justify-between">
                <div>End Date</div>
                <div>
                  <input
                    type="checkbox"
                    id="present"
                    onChange={handleItemChange}
                    defaultChecked={itemCopy.present}
                  />
                  <label htmlFor="present"> Present</label>
                </div>
              </div>
              <div
                className={
                  "select-my " + (itemCopy.present === 1 && "disabled")
                }
              >
                <SelectSection
                  type="monthEnd"
                  item={itemCopy}
                  onChange={handleItemChange}
                  disabled={itemCopy.present}
                />
                <SelectSection
                  type="yearEnd"
                  item={itemCopy}
                  onChange={handleItemChange}
                  disabled={itemCopy.present}
                />
              </div>
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

export default FormExperience;
