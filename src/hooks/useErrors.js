import { useState } from "react";

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(fieldName) {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
