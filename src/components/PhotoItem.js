import React from "react";

function PhotoItem({ photo }) {
    return (
        <div className="photo-item">
            <img src={photo.urls.small} alt={photo.alt.description}/>
            <p>{photo.alt_description}</p>
        </div>
    )
}

export default PhotoItem; 