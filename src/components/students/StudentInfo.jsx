import { memo } from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import StudentInfoList from "./StudentInfoList";
import StudentGrades from "./StudentGrades";
import StudentTags from "./StudentTags";
import TagForm from "../TagForm";
import Button from "../Button";

const StudentInfo = ({ student }) => {
  const [showGrades, setShowGrades] = useState(false);
  const [tags, setTags] = useState(student.tags || []);

  const calculateAverage = () => {
    return (
      student.grades.reduce((a, b) => parseInt(a) + parseInt(b), 0) /
      student.grades.length
    );
  };

  const addTag = (tag) => {
    setTags((prevTags) => [...prevTags, tag]);
  };

  const handleClick = () => {
    setShowGrades(!showGrades);
  };

  return (
    <div className="flex justify-between last-item px-4 py-4">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:items-start">
          <figure className="md:self-center mb-2 md:mb-0">
            <img
              className="w-32 rounded-full border"
              src={student.pic}
              alt="student"
            />
          </figure>
        </div>
        <div className="md:ml-4">
          <h1 className="font-raleway font-extrabold text-3xl md:text-4xl uppercase mb-1 md:mb-2">
            {student.firstName} {student.lastName}
          </h1>
          <div className="flex flex-col">
            <StudentInfoList
              student={student}
              calculateAverage={calculateAverage}
            />
            {showGrades && <StudentGrades grades={student.grades} />}
            <StudentTags tags={tags} />
            <TagForm addTag={addTag} />
          </div>
        </div>
      </div>
      <div className="md:flex items-start justify-end">
        <Button onClick={handleClick}>
          {showGrades ? (
            <FaMinus className="text-3xl mt-3 text-gray-400 hover:text-black" />
          ) : (
            <FaPlus className="text-3xl mt-3 text-gray-400 hover:text-black" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default memo(StudentInfo);
