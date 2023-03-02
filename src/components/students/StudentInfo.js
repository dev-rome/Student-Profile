function StudentInfo({ student }) {
  const getAverage = (students) => {
    let total = 0;
    for (let grade of students.grades) {
      total += Number(grade);
    }
    return total / students.grades.length;
  };

  return (
    <ul>
      <li>
        Email:<span>{student.email}</span>
      </li>
      <li>
        Company:<span>{student.company}</span>
      </li>
      <li>
        Skill:<span>{student.skill}</span>
      </li>
      <li>
        Average:<span>{getAverage(student)}&#37;</span>
      </li>
    </ul>
  );
}

export default StudentInfo;
