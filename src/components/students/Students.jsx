import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import SearchForm from "../SearchForm";
import StudentInfo from "./StudentInfo";

const Students = () => {
  const [filterNameValue, setFilterNameValue] = useState("");
  const [filterTagValue, setFilterTagValue] = useState("");
  const [updatedStudents, setUpdatedStudents] = useState({});
  const url = "https://api.hatchways.io/assessment/students";
  const { data, loading, error } = useFetch(url);

  const updateStudentTags = (studentId, newTags) => {
    setUpdatedStudents((prevUpdatedStudents) => ({
      ...prevUpdatedStudents,
      [studentId]: newTags,
    }));
  };

  const filteredStudents = data.filter(({ id, firstName, lastName, tags }) => {
    const fullName = `${firstName} ${lastName}`;
    const nameMatch = fullName
      .toLowerCase()
      .includes(filterNameValue.toLowerCase());

    const updatedTags = updatedStudents[id] || tags;

    const tagMatch =
      !filterTagValue ||
      (updatedTags &&
        updatedTags.some((tag) =>
          tag.toLowerCase().includes(filterTagValue.toLowerCase())
        ));

    return nameMatch && tagMatch;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="h-screen bg-gray-200 flex justify-center items-center px-4">
      <div className="bg-white h-[80vh] max-w-4xl w-full shadow-md rounded-lg overflow-y-auto">
        <SearchForm
          placeholder="Search by name"
          value={filterNameValue}
          onChange={(e) => setFilterNameValue(e.target.value)}
        />
        <SearchForm
          placeholder="Search by tag"
          value={filterTagValue}
          onChange={(e) => setFilterTagValue(e.target.value)}
        />
        {filteredStudents.map((student) => (
          <StudentInfo
            key={student.id}
            student={student}
            tag={updatedStudents[student.id] || student.tags}
            updateStudentTags={updateStudentTags}
          />
        ))}
      </div>
    </section>
  );
};

export default Students;
