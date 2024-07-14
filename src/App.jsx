import { useState } from "react";
import FormSection from "./components/FormSection";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState(getDefault().generalInfo);
  const [education, setEducation] = useState(getDefault().education);
  const [experience, setExperience] = useState(getDefault().experience);

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
          month: "June",
          year: "2024",
        },
        {
          id: 1,
          school: "University of Bear",
          title: "Bachelor of Science in Bear Study",
          month: "September",
          year: "2020",
        },
      ],
      experience: [
        {
          id: 0,
          company: "Jurassic Park",
          position: "Lead Analyst of Animal Behaviour",
          responsibility:
            "Analyse animal behaviour and interaction between other species",
          monthStart: "July",
          yearStart: "2024",
          monthEnd: "",
          yearEnd: "",
          present: 1,
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

  function handleExperienceChange(itemNew, action) {
    let experienceNew = [...experience];
    const index = experienceNew.findIndex((item) => item.id === itemNew.id);

    if (action === "del") {
      experienceNew.splice(index, 1);
    } else if (action === "mod") {
      experienceNew[index] = itemNew;
    } else if (action === "add") {
      experienceNew.push(itemNew);
    }

    setExperience(experienceNew);
  }

  return (
    <>
      <aside className="max-h-screen w-[40%] flex flex-col print:hidden">
        <div className="text-2xl font-bold">CV Application</div>
        <div className="mt-5 flex flex-col gap-5 overflow-auto">
          <FormSection
            generalInfo={generalInfo}
            education={education}
            experience={experience}
            onGeneralInfoChange={handleGeneralInfoChange}
            onEducationChange={handleEducationChange}
            onExperienceChange={handleExperienceChange}
          />
        </div>
      </aside>
      <main className="w-[60%] print:w-screen border print:border-none">
        <Resume
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />
      </main>
    </>
  );
}

export default App;
