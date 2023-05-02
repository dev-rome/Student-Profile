const SearchForm = ({ value, placeholder, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full h-[3.75rem] text-xl border-0 pl-[0.3] border-b border-[#dee2e6] outline-none focus:border-b focus:border-black px-4"
    />
  );
};

export default SearchForm;
