import { useState, useEffect } from "react";

// custom use fecth hook to grab data from url
const useFetch = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not found. Please check your URL.");
        }
        return res.json();
      })
      .then((data) => {
        setStudents(data.students);
      })
      .catch((err) => {
        setIsError(err.message);
      });
    setIsLoading(false);
  }, []);
  return { students, isLoading, isError };
};

export default useFetch;
