import config from '../config';

const URL_CATEGORIES = `${config.API_URL}/categories`;

function getAll() {
  return fetch(URL_CATEGORIES).then(async (value) => {
    if (value.ok) {
      const response = await value.json();
      return response;
    }
    throw new Error('Não foi possível obter os vídeos');
  });
}

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (value) => {
    if (value.ok) {
      const response = await value.json();
      return response;
    }
    throw new Error('Não foi possível obter os vídeos');
  });
}

function create(categoryObj) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(categoryObj),
  }).then(async (value) => {
    if (value.ok) {
      const response = await value.json();
      return response;
    }
    throw new Error('Não foi possível obter os vídeos');
  });
}

export default { getAllCategoriesWithVideos, create, getAll };
