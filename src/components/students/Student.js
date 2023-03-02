import StudentInfo from "./StudentInfo";

function Student({ student }) {
  return (
    <div>
      <img src={student.pic} alt="student" />
      <div>
        <h1>
          {student.firstName} {student.lastName}
        </h1>
        <StudentInfo student={student} />
      </div>
    </div>
  );
}

export default Student;
