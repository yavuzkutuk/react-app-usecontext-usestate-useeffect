import { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import './App.css';
import Brand from './component/brand';
import { CurrentBrandContextProvider } from "./contexts/brandsContext";
import CurrentBrand from './component/currentBrand';

function App() {
  const [search, setSearch] = useState('');
  const [brands, setBrands] = useState([]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if(search.length > 3){
      axios.get(`https://fr.openfoodfacts.org/brand/${search}.json`)
      .then((response) => {
        setBrands(response.data.products);
      })
      .catch((err) => {

      });
    }
  }, [search])

  return (
    <CurrentBrandContextProvider>
      <div className="uk-container">
        <div className="uk-position-center">
          <h2>Besoin d'aide ?</h2>
          <input type="text" className="uk-input" value={search} onChange={onChangeSearch} />
          <div className="uk-margin">
            <ul className="uk-child-width-1-4 uk-grid" data-uk-height-match="target: li">
            {brands.slice(0, 5).map((brand, index) => {
                return <Brand key={index} image={brand.image_front_thumb_url} name={brand.product_name} />
              })}
            </ul>
          </div>
          <hr/>
          <CurrentBrand />
        </div>
      </div>
    </CurrentBrandContextProvider>
  );
}

export default App;
