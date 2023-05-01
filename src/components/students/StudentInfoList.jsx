function StudentInfoList({ student, calculateAverage }) {
    return (
      <ul className="font-raleway ml-3 md:ml-6 mb-3">
        <li>Email: {student.email}</li>
        <li>Company: {student.company}</li>
        <li>Skill: {student.skill}</li>
        <li>Average: {calculateAverage()}%</li>
      </ul>
    );
  }

  export default StudentInfoList;