import config from '../config';

const URL_VIDEOS = `${config.API_URL}/videos`;
function create(videoObj) {
  console.log(videoObj);
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(videoObj),
  }).then(async (value) => {
    if (value.ok) {
      const response = await value.json();
      return response;
    }
    throw new Error('Não foi possível salvar o vídeo');
  });
}

export default { create };
