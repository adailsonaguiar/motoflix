import { useState } from 'react';

const useForm = ({ initialsValues }) => {
  const [values, setValues] = useState(initialsValues);

  function setValue(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleChange(e) {
    const { value } = e.target;
    setValue(e.target.getAttribute('name'), value);
  }

  return { handleChange, values };
};

export default useForm;
