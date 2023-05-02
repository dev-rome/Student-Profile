import { memo } from "react";

const StudentGrades = ({ grades }) => {
  return (
    <ul className="font-raleway ml-3 md:ml-6 mb-3">
      {grades.map((grade, index) => (
        <li key={index}>
          <span className="mr-6">Test {index + 1}:</span> {grade}%
        </li>
      ))}
    </ul>
  );
};

export default memo(StudentGrades);
