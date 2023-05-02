import React, { useState } from "react";

const TagForm = ({ addTag }) => {
  const [tagValue, setTagValue] = useState("");

  const handleChange = (e) => {
    setTagValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tagValue.trim() === "") return;
    addTag(tagValue);
    setTagValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a tag"
        value={tagValue}
        onChange={handleChange}
        className="font-raleway ml-3 md:ml-6 mb-3 pb-2 outline-none border-b border-[#dee2e6] focus:border-b focus:border-black"
      />
    </form>
  );
};

export default TagForm;
