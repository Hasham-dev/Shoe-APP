import React from 'react';
import { useParams } from 'react-router-dom'
import Shoes from './../shoes.json'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';



function ProductItem() {

  let { id } = useParams();
  const shoe = Shoes[id]

  if (!shoe)
    return <h2>Poduct not found</h2>

  return (
    <div>
      <div>
        {/* <h2>{shoe.name}</h2>
        <img src={shoe.img} height={150} alt={shoe.name} /> */}

        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" className="container1">
            <div>
              <div>
                <Paper variant="outlined" className='PaperHead1'>
                  <div >
                    <h2 className="Product-head1">{shoe.name}</h2>
                    <img src={shoe.img} height={150} alt={shoe.name} className="Product-img1" />
                    <hr />
                      <h1 className="Pirce-tag-in">{shoe.price}</h1>
                  </div>
                </Paper>
              </div>
          </div>
      </Container>
    </React.Fragment>
    </div>
    </div >
  );
}

export default ProductItem;

