import { useState } from "react";
import * as data from "./components/data";
import FormSection from "./components/FormSection";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const dataCopy = data.getData();
  const [generalInfo, setGeneralInfo] = useState(dataCopy.generalInfo);
  const [education, setEducation] = useState(dataCopy.education);
  const [experience, setExperience] = useState(dataCopy.experience);

  function handleGeneralInfoChange(infoNew) {
    setGeneralInfo(infoNew);
    data.setLocalStorageData({ ...dataCopy, ["generalInfo"]: infoNew });
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
    data.setLocalStorageData({ ...dataCopy, ["education"]: educationNew });
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
    data.setLocalStorageData({ ...dataCopy, ["experience"]: experienceNew });
  }

  return (
    <>
      <aside className="max-h-screen w-[40%] flex flex-col print:hidden">
        <div className="text-2xl font-bold">CV Application</div>
        <div
          className="mt-5 flex flex-col gap-5 overflow-auto"
          id="form-section"
        >
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
      <main className="w-[60%] print:w-screen">
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
