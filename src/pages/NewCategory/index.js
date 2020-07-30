import React from 'react';
import { Link } from 'react-router-dom';


const NewCategory = () => {
  return (
    <>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>Cadastrar</button>
      </form>

      <Link to="/">Ir para home</Link>
    </>
  );
};

export default NewCategory;
