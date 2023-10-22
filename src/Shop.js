import { useState } from 'react';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';

function Shop() { 
const [clothes, setClothes] = useState(data);



return (<div>
  <div className="cont">
    <h2 className="back">Free Standard Shipping</h2>
  </div>
  <Buttons 
  data={data}
  setClothes={setClothes}
  /> 
<Clothes clothes={clothes}/>
</div>
)
 }

export default Shop;
