import React from 'react';
import { Link } from 'react-router-dom'
import Shoes from './../shoes.json'

function Product() {
    console.log(Shoes); 
  return (
    <div>
      <h1>Welcome to Product Page</h1>
        <div>
            {Object.keys(Shoes).map(keyName=>{
                const shoe = Shoes[keyName];
                return(<Link  key={keyName} to={`/product/${keyName}`}>
                    <h2>{shoe.name}</h2>
                    <img src={shoe.img} height={150} alt={shoe.name}/>
                    </Link>)
            } )}
        </div>
    </div>
  );
}

export default Product;
