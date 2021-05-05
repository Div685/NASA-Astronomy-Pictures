export const mappingPhotos = (photos) => (
  {
    title: photos.title,
    date: photos.date,
    url: photos.url,
    explanation: photos.explanation,
    media_type: photos.media_type,
  });

export const mapPhotoInfo = (state) => {
  const { photos } = state;
  const photosAttributes = photos.map((photo) => mappingPhotos(photo));
  return photosAttributes;
};

export const filterPhotosByDate = (photos, date) => {
  const res = photos.filter((item) => item.date === date);
  return res;
};
