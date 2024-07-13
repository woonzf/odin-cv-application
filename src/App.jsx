import { useState } from "react";
import FormGeneralInfo from "./components/FormGeneralInfo";
import FormEducation from "./components/FormEducation";
import FormExperience from "./components/FormExperience";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState(getDefault().generalInfo);
  const [education, setEducation] = useState(getDefault().education);
  const [experience, setExperience] = useState(getDefault().experience);
  const [activeSection, setActiveSection] = useState(0);

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

  function handleActiveSectionChange(index) {
    setActiveSection(index);
  }

  return (
    <>
      <aside className="w-[40%] flex flex-col gap-5 print:hidden">
        <div className="text-2xl">CV Application</div>
        <FormGeneralInfo
          title="General Information"
          data={generalInfo}
          onChange={handleGeneralInfoChange}
          section={1}
          activeSection={activeSection}
          onOpen={handleActiveSectionChange}
        />
        <FormEducation
          title="Education"
          data={education}
          onChange={handleEducationChange}
          section={2}
          activeSection={activeSection}
          onOpen={handleActiveSectionChange}
        />
        <FormExperience
          title="Experience"
          data={experience}
          onChange={handleExperienceChange}
          section={3}
          activeSection={activeSection}
          onOpen={handleActiveSectionChange}
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
