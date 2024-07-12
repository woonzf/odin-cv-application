import { useState } from "react";
import FormSection from "./components/FormSection";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState(getDefault().generalInfo);
  const [education, setEducation] = useState(getDefault().education);

  function getDefault() {
    return {
      generalInfo: {
        name: "John Doe",
        email: "johndoe@who.com",
        phone: "+1234-5678910",
      },
      education: [
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
      ],
    };
  }

  function handleGeneralInfoChange(infoNew) {
    setGeneralInfo(infoNew);
  }

  function handleEducationChange(itemNew, action) {
    let educationNew = [...education];
    const index = educationNew.findIndex((item) => item.id === itemNew.id);

    if (action === "del") {
      educationNew.splice(index, 1);
    } else if (action === "mod") {
      educationNew[index] = itemNew;
    } else if (action === "add") {
      educationNew.push(itemNew);
    }

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
