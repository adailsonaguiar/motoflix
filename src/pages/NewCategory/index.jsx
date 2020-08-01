import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import categoriesRepository from '../../repositories/categories';

const NewCategory = () => {
  const initialsValues = {
    title: '',
    description: '',
    color: '#000',
    textextra: '',
    urlextra: '',
  };
  const { values, handleChange } = useForm({ initialsValues });
  const [categories, setCategories] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newCategory = {
      title: values.title,
      description: values.description,
      color: values.color,
      link_extra: { text: values.textextra, url: values.urlextra },
    };
    console.log(newCategory);
    setCategories([...categories, newCategory]);
    categoriesRepository.create(newCategory);
  }

  useEffect(() => {
    categoriesRepository
      .getAllCategoriesWithVideos()
      .then((value) => setCategories(value));
  }, []);
  return (
    <>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="title"
          label="Nome da Categoria"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          type="textarea"
          name="description"
          label="Descrição"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          type="color"
          name="color"
          label="Selecione uma cor"
          value={values.color}
          onChange={handleChange}
        />
        <FormField
          type="text"
          name="textextra"
          label="Nome Link Externo"
          value={values.textextra}
          onChange={handleChange}
        />
        <FormField
          type="text"
          name="urlextra"
          label="Url Link Externo"
          value={values.urlextra}
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
