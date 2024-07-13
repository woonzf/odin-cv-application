import { useState } from "react";
import FormGeneralInfo from "./FormGeneralInfo";
import FormEducation from "./FormEducation";
import FormExperience from "./FormExperience";

function FormSection({
  generalInfo,
  education,
  experience,
  onGeneralInfoChange,
  onEducationChange,
  onExperienceChange,
}) {
  const [activeSection, setActiveSection] = useState(0);

  function handleActiveSectionChange(index) {
    setActiveSection(index);
  }

  return (
    <>
      <FormGeneralInfo
        title="General Information"
        data={generalInfo}
        onChange={onGeneralInfoChange}
        section={1}
        activeSection={activeSection}
        onOpen={handleActiveSectionChange}
      />
      <FormEducation
        title="Education"
        data={education}
        onChange={onEducationChange}
        section={2}
        activeSection={activeSection}
        onOpen={handleActiveSectionChange}
      />
      <FormExperience
        title="Experience"
        data={experience}
        onChange={onExperienceChange}
        section={3}
        activeSection={activeSection}
        onOpen={handleActiveSectionChange}
      />
    </>
  );
}

export default FormSection;
