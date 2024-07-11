function Resume({ generalInfo, education }) {
  return (
    // A4 ratio = 1.41
    <div className="w-full aspect-[0.709] flex flex-col gap-5">
      <div className="py-10 bg-sky-600 text-white flex flex-col justify-center items-center gap-3">
        <div className="text-xl font-bold">{generalInfo.name}</div>
        <div className="flex gap-10">
          <div>{generalInfo.email}</div>
          <div>{generalInfo.phone}</div>
        </div>
      </div>
      <div className="w-full px-7 flex flex-col gap-2">
        <div className="text-xl">Education</div>
        <div className="h-1 w-full border-b"></div>
        {education.map((item) => {
          return (
            <div key={item.id}>
              <div className="text-lg font-bold">{item.school}</div>
              <div className="flex justify-between">
                <div>{item.title}</div>
                <div>{item.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resume;
