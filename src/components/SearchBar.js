import React, { useState} from "react";

function SearchBar({ onSearch }) {
    const [term, setTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(term)
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Pesquisar fotos..."
          />
          <button type="submit">Pesquisar</button>
        </form>
    )
}

export default SearchBar