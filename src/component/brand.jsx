import React, { useContext } from 'react';
import CurrentBrandContext from '../contexts/brandsContext';

export default function Brand({image, name}){
  const { setCurrentImage, setCurrentName } = useContext(CurrentBrandContext);

  const handleCurrentBrand = () => {
    setCurrentImage(image);
    setCurrentName(name);
  }
    return(
        <li>
            <img src={image} alt={name} onClick={handleCurrentBrand} />
        </li>
    )
}