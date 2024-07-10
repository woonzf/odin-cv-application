import { useState } from "react";
import FormGeneralInformation from "./components/FormGeneralInfo";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const generalInfoDefault = {
    name: "John Doe",
    email: "johndoe@who.com",
    phone: "+1234-5678910",
  };
  const [generalInfo, setGeneralInfo] = useState(generalInfoDefault);

  function handleGeneralInfoChange(e) {
    const target = e.target;
    setGeneralInfo({ ...generalInfo, [target.id]: target.value });
  }

  return (
    <>
      <aside className="w-[40%] flex flex-col gap-5 print:hidden">
        <div className="text-2xl">CV Application</div>
        <FormGeneralInformation
          generalInfo={generalInfo}
          onChange={handleGeneralInfoChange}
        />
      </aside>
      <main className="w-[60%] print:w-full">
        <Resume generalInfo={generalInfo} />
      </main>
    </>
  );
}

export default App;
