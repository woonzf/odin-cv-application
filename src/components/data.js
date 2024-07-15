if (!localStorage.cvApp) setLocalStorageData(getDefaultData());

function getDefaultData() {
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

export function setLocalStorageData(data) {
  localStorage.setItem("cvApp", JSON.stringify(data));
}

export function getData() {
  return JSON.parse(localStorage.getItem("cvApp"));
}

export function loadDefaultData() {
  setLocalStorageData(getDefaultData());
}
