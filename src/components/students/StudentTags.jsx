const StudentTags = ({ tags }) => {
  return (
    <ul className="flex gap-2 ml-3 md:ml-6 mb-3">
      {tags.map((tag, index) => (
        <li key={index} className="bg-gray-200 text-black px-2 py-1 rounded-sm">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default StudentTags;
