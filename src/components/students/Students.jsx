import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Search from "../Search";
import StudentInfo from "./StudentInfo";

function Students() {
  const [filterValue, setFilterValue] = useState("");
  const url = "https://api.hatchways.io/assessment/students";
  const { data, loading, error } = useFetch(url);

  const filteredStudents = data.filter(({ firstName, lastName }) => {
    const fullName = `${firstName} ${lastName}`;
    return fullName.toLowerCase().includes(filterValue.toLowerCase());
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="h-screen bg-gray-200 flex justify-center items-center px-4">
      <div className="bg-white h-[80vh] max-w-4xl w-full shadow-md rounded-lg overflow-y-auto">
        <Search
          placeholder="Search by name"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
        {filteredStudents.map((student) => (
          <StudentInfo key={student.id} student={student} />
        ))}
      </div>
    </section>
  );
}

export default Students;
