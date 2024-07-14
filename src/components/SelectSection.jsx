function SelectSection({ type, item, onChange }) {
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
        {years.map((year) => (
          <option key={year}>{year}</option>
        ))}
      </>
    );
  }

  return (
    <div className="w-full flex flex-col">
      {type === "month" && (
        <>
          <label htmlFor="month">Month</label>
          <select id="month" value={item.month} onChange={onChange}>
            <OptionMonth />
          </select>
        </>
      )}
      {type === "year" && (
        <>
          <label htmlFor="year">Year</label>
          <select id="year" value={item.year} onChange={onChange}>
            <OptionYear />
          </select>
        </>
      )}
    </div>
  );
}

export default SelectSection;
