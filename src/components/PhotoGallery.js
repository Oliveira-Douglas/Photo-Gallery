import React, { useContext, useEffect } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import PhotoItem from './PhotoItem';

function PhotoGallery({ query }) {
  const { photos, fetchPhotos } = useContext(PhotoContext);

  useEffect(() => {
    if (query) {
      fetchPhotos(query);
    }
  }, [query, fetchPhotos]);

  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

export default PhotoGallery;
