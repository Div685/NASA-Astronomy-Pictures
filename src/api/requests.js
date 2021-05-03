export const getPhotos = async () => {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5';
  const request = await fetch(url, { mode: 'cors' });
  if (request.status === 200) {
    const data = await request.json();
    return data;
  }
  throw Error(404);
};

export const getSinglePhoto = async (date) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;
  const request = await fetch(url, { mode: 'cors' });
  if (request.status === 200) {
    const data = await request.json();
    return data;
  }
  throw Error(404);
};
