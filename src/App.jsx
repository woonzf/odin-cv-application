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
          date: "2024-07-08",
        },
        {
          id: 1,
          school: "University of Bear",
          title: "Bachelor of Science in Bear Study",
          date: "2020-09-20",
        },
      ],
      experience: [
        {
          id: 0,
          company: "Jurassic Park",
          position: "Lead Analyst of Animal Behaviour",
          responsibility:
            "Analyse animal behaviour and interaction between other species",
          dateStart: "2024-07-08",
          dateEnd: "present",
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
      <aside className="w-[40%] flex flex-col gap-5 print:hidden">
        <div className="text-2xl">CV Application</div>
        <FormSection
          generalInfo={generalInfo}
          education={education}
          experience={experience}
          onGeneralInfoChange={handleGeneralInfoChange}
          onEducationChange={handleEducationChange}
          onExperienceChange={handleExperienceChange}
        />
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
