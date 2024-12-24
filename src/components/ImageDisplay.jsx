import React from 'react';
const defaultImage = 'https://via.placeholder.com/512?text=Default+Image';

const ImageDisplay = ({ imageUrl }) => {
    return (
        <div>
            <img src={imageUrl || defaultImage} alt="Displayed" />
        </div>
    );
}

export default ImageDisplay;