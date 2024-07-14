function SelectSection({ type, item, onChange, disabled }) {
  function getValue() {
    if (type.includes("month")) {
      if (type.includes("Start")) return item.monthStart;
      else if (type.includes("End")) return item.monthEnd;
      else return item.month;
    } else if (type.includes("year")) {
      if (type.includes("Start")) return item.yearStart;
      else if (type.includes("End")) return item.yearEnd;
      else return item.year;
    }
  }

  function OptionMonth() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return (
      <>
        <option></option>
        {months.map((month) => (
          <option key={month}>{month}</option>
        ))}
      </>
    );
  }

  function OptionYear() {
    const yearStart = 1950;
    const yearEnd = new Date().getFullYear();

    let years = [];
    for (let i = yearEnd; i >= yearStart; i--) {
      years.push(i);
    }

    return (
      <>
        <option></option>
        {years.map((year) => (
          <option key={year}>{year}</option>
        ))}
      </>
    );
  }

  return (
    <div className="w-full flex flex-col">
      {type.includes("month") && (
        <>
          <label htmlFor={type}>
            <small>Month</small>
          </label>
          <select
            id={type}
            value={getValue()}
            onChange={onChange}
            disabled={disabled}
          >
            <OptionMonth />
          </select>
        </>
      )}
      {type.includes("year") && (
        <>
          <label htmlFor={type}>
            <small>Year</small>
          </label>
          <select
            id={type}
            value={getValue()}
            onChange={onChange}
            disabled={disabled}
          >
            <OptionYear />
          </select>
        </>
      )}
    </div>
  );
}

export default SelectSection;
