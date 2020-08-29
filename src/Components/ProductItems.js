import React from 'react';
import { useParams } from 'react-router-dom'
import Shoes from './../shoes.json'



function ProductItem() {

  let { id } = useParams();
  const shoe = Shoes[id]

  if (!shoe)
    return <h2>Poduct not found</h2>
  console.log(shoe)
  return (
    <div>
      <h1>Welcome to ProductItem J.s</h1>
      <div>
        <h2>{shoe.name}</h2>
        <img src={shoe.img} height={150} alt={shoe.name} />
      </div>
    </div>
  );
}

export default ProductItem;
