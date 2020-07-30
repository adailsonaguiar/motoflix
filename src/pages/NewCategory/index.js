import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';

const NewCategory = () => {
  const [categories, setCategories] = useState([]);
  const initialsValues = {
    name: '',
    description: '',
    color: '#000',
  };
  const [category, setCategory] = useState(initialsValues);

  function setValue(key, value) {
    setCategory({ ...category, [key]: value });
  }

  function handleChange(e) {
    const { value } = e.target;
    setValue(e.target.getAttribute('name'), value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([...categories, category]);
    console.log(category);
  }
  return (
    <>
      <h1>Cadastro de Categoria: {category.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="name"
          label="Nome da Categoria"
          value={category.name}
          onChange={handleChange}
        />

        <FormField
          type="text"
          name="description"
          label="Descrição"
          value={category.description}
          onChange={handleChange}
        />

        <FormField
          type="color"
          name="color"
          label="Selecione uma cor"
          value={category.color}
          onChange={handleChange}
        />
        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </>
  );
};

export default NewCategory;
