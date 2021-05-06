const API_KEY = 'ZoQzRnHXonLhRfUn7XRSEU8mNvehS5IWEnEXvDRf';
export const getPhotos = async () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=9`;
  const request = await fetch(url, { mode: 'cors' });
  if (request.status === 200) {
    const data = await request.json();
    return data;
  }
  throw Error(404);
};

export const getSinglePhoto = async (date) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
  const request = await fetch(url, { mode: 'cors' });
  if (request.status === 200) {
    const data = await request.json();
    return data;
  }
  throw Error(404);
};

export const getDateFilteredPhoto = async (date) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
  const request = await fetch(url, { mode: 'cors' });
  const data = await request.json();
  return data;
};
