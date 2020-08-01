import React from 'react';
import { Link } from 'react-router-dom';

const NewVideo = () => (
  <>
    <h1>NOVO VÍDEO</h1>
    <Link to="/new-category">cadastrar categoria</Link>
  </>
);

export default NewVideo;
