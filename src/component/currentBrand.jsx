import React, { useContext} from 'react';
import CurrentBrandContext from "../contexts/brandsContext";

export default function CurrentBrand(){

    const { currentImage, currentName } = useContext(CurrentBrandContext);

    return(
        <div>
            <h3>Le brand de l'année <strong>{currentName}</strong></h3>
            <img src={currentImage} alt={currentName} />
        </div>
    )
}