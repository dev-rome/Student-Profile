import useFetch from "../../hooks/useFetch";
import Student from "./Student";

function StudentContainer() {
  const { students } = useFetch();

  const displayStudent = students.map((student) => {
    return <Student key={student.id} student={student} />;
  });

  return <div>{displayStudent}</div>;
}

export default StudentContainer;
