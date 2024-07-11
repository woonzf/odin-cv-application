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
        <div>
          <div className="text-lg font-bold">{education.school}</div>
          <div className="flex justify-between">
            <div>{education.title}</div>
            <div>{education.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
