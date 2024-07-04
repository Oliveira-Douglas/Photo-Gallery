import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import PhotoGallery from './components/PhotoGallery'
import { PhotoProvider } from './context/PhotoContext'
import './App.css';

function App() {

  const [query, setQuery] = useState('') 

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery)
  }

  return (
    <PhotoProvider>
      <div> 
      <h1>Galeria de Fotos</h1>
      <SearchBar onSearch={handleSearch} />
      <PhotoGallery query={query} />
      </div>
    </PhotoProvider>
  )
}

export default App;
