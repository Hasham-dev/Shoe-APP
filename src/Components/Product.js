import React from 'react';
import { Link } from 'react-router-dom'
import Shoes from './../shoes.json'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


function Product() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className="container">
        <div>
          <div  className="Product-list">
            {Object.keys(Shoes).map(keyName => {
              const shoe = Shoes[keyName];
              return (
                <div>
                  <Paper variant="outlined" className='PaperHead'>
                    <Link key={keyName} to={`/product/${keyName}`}>
                      <h2 className="Product-head">{shoe.name}</h2>
                      <img src={shoe.img} height={150} alt={shoe.name} className="Product-img"/>
                      <hr />
                      <h1 className="Pirce-tag">{shoe.price}</h1>
                    </Link>
                  </Paper>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Product;
