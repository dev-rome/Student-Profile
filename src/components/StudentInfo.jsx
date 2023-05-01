function StudentInfo({ student }) {
  const calculateAverage = (grades) => {
    const sum = grades.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    return sum / grades.length;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 last-item pl-4 py-4">
      <figure className="col-span-2 self-center mb-2 md:mb-0">
        <img
          className="w-32 rounded-full border"
          src={student.pic}
          alt="student"
        />
      </figure>
      <div className="col-span-10 md:ml-4">
        <h1 className="font-raleway font-black text-4xl md:text-5xl uppercase mb-1 md:mb-2">
          {student.firstName} {student.lastName}
        </h1>
        <ul className="font-raleway ml-3 md:ml-6">
          <li>Email: {student.email}</li>
          <li>Company: {student.company}</li>
          <li>Skill: {student.skill}</li>
          <li>Average: {calculateAverage(student.grades)}%</li>
        </ul>
      </div>
      {/* <button className="">Hello</button> */}
    </div>
  );
}

export default StudentInfo;
