import { useState } from "react";
import FormSection from "./components/FormSection";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const generalInfoDefault = {
    name: "John Doe",
    email: "johndoe@who.com",
    phone: "+1234-5678910",
  };

  const educationDefault = [
    {
      id: 0,
      school: "University of Deer",
      title: "Bachelor of Science in Deer Study",
      date: "2024-07-08",
    },
    {
      id: 1,
      school: "University of Bear",
      title: "Bachelor of Science in Bear Study",
      date: "2020-09-20",
    },
  ];

  const [generalInfo, setGeneralInfo] = useState(generalInfoDefault);
  const [education, setEducation] = useState(educationDefault);

  function handleGeneralInfoChange(e) {
    const target = e.target;
    setGeneralInfo({ ...generalInfo, [target.id]: target.value });
  }

  function handleEducationChange(itemNew) {
    let educationNew = [...education];
    const index = educationNew.findIndex((item) => item.id === itemNew.id);
    educationNew[index] = itemNew;
    setEducation(educationNew);
  }

  return (
    <>
      <aside className="w-[40%] flex flex-col gap-5 print:hidden">
        <div className="text-2xl">CV Application</div>
        <FormSection
          title="General Information"
          data={generalInfo}
          onChange={handleGeneralInfoChange}
        />
        <FormSection
          title="Education"
          data={education}
          onChange={handleEducationChange}
        />
      </aside>
      <main className="w-[60%] print:w-screen border print:border-none">
        <Resume generalInfo={generalInfo} education={education} />
      </main>
    </>
  );
}

export default App;
