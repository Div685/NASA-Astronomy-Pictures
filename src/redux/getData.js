const mappingPhotos = (photos) => (
  {
    title: photos.title,
    date: photos.date,
    url: photos.url,
    explanation: photos.explanation,
  });

const mapPhotoInfo = (state) => {
  const { photos } = state;
  const photosAttributes = photos.map((photo) => mappingPhotos(photo));
  return photosAttributes;
};

export default mapPhotoInfo;
