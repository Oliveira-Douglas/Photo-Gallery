import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = useCallback(async (query) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query },
      headers: {
        Authorization: `Client-ID ${process.env.REAC_APP_UNSPLASH_AhdzbQrs1_ElSnQIIa_yHMFcOy1vRRr7sD8aaKbpw2E}`,
      },
    });
    setPhotos(response.data.results);
  }, []);

  return (
    <PhotoContext.Provider value={{ photos, fetchPhotos }}>
      {children}
    </PhotoContext.Provider>
  );
};
