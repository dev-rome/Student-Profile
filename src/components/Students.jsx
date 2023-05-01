import useFetch from "../hooks/useFetch";
import StudentInfo from "./StudentInfo";

function Students() {
  const url = "https://api.hatchways.io/assessment/students";
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <section className="h-screen bg-gray-200 flex justify-center items-center px-4">
      <div className="bg-white h-[80vh] max-w-4xl w-full shadow-md rounded-lg overflow-y-auto">
        {data.map((student) => (
          <StudentInfo key={student.id} student={student} />
        ))}
      </div>
    </section>
  );
}

export default Students;
