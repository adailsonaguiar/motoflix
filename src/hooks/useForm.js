import { useState } from 'react';

const useForm = ({ initialsValues }) => {
  const [category, setCategory] = useState(initialsValues);

  function setValue(key, value) {
    setCategory({ ...category, [key]: value });
  }

  function handleChange(e) {
    const { value } = e.target;
    setValue(e.target.getAttribute('name'), value);
  }

  return { handleChange, category };
};

export default useForm;
