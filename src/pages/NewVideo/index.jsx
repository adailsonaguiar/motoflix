import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import videoRepository from '../../repositories/videos';
import categoryRepository from '../../repositories/categories';

const NewVideo = () => {
  const initialsValues = {
    title: '',
    url: '',
    category: '',
  };
  const { values, handleChange } = useForm({ initialsValues });
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map((category) => category.title);

  function handleSubmit(e) {
    e.preventDefault();
    const category = categories.find(
      (categoryAr) => categoryAr.title === values.category
    );
    if (category) {
      videoRepository.create({
        title: values.title,
        url: values.url,
        categoryId: category.id,
      });
      history.push('/');
    } else alert('Digite uma categoria existente!');
  }

  useEffect(() => {
    categoryRepository.getAll().then((value) => setCategories(value));
  }, []);

  return (
    <>
      <h1>NOVO VÍDEO</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="title"
          label="Nome do vídeo"
          value={values.title}
          onChange={handleChange}
        />
        <FormField
          type="text"
          name="url"
          label="Link do Vídeo"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          type="text"
          name="category"
          label="Categoria do Vídeo"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <Button>CADASTRAR</Button>
      </form>
      <Link to="/new-category">cadastrar categoria</Link>
    </>
  );
};

export default NewVideo;
