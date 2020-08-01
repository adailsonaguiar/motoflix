import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';

const NewCategory = () => {
  const initialsValues = {
    name: '',
    description: '',
    color: '#000',
  };
  const { category, handleChange } = useForm({ initialsValues });
  const [categories, setCategories] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([...categories, category]);

    fetch('https://arlivre-api.herokuapp.com/categories', {
      method: 'POST',
      body: JSON.stringify(category),
    });

    console.log(JSON.stringify(category));
  }

  useEffect(() => {
    const URL = 'https://arlivre-api.herokuapp.com/categories';

    fetch(URL)
      .then((value) => value.json())
      .then((value) => setCategories([...value]));
  }, []);
  return (
    <>
      <h1>
        Cadastro de Categoria:
        {category.name}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="name"
          label="Nome da Categoria"
          value={category.name}
          onChange={handleChange}
        />

        <FormField
          type="textarea"
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
        <Button>CADASTRAR</Button>
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
