import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';

const NewCategory = () => {
  const initialsValues = {
    title: '',
    description: '',
    color: '#000',
    textextra: '',
    urlextra: '',
  };
  const { category, handleChange } = useForm({ initialsValues });
  const [categories, setCategories] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newCategory = {
      title: category.title,
      description: category.description,
      color: category.color,
      link_extra: { text: category.textextra, url: category.urlextra },
    };
    console.log(newCategory);
    setCategories([...categories, newCategory]);

    // fetch('https://arlivre-api.herokuapp.com/categories', {
    //   method: 'POST',
    //   body: JSON.stringify(newCategory),
    // });
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
          name="title"
          label="Nome da Categoria"
          value={category.title}
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
        <FormField
          type="text"
          name="textextra"
          label="Nome Link Externo"
          value={category.textextra}
          onChange={handleChange}
        />
        <FormField
          type="text"
          name="urlextra"
          label="Url Link Externo"
          value={category.urlextra}
          onChange={handleChange}
        />
        <Button>CADASTRAR</Button>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category.title}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </>
  );
};

export default NewCategory;
