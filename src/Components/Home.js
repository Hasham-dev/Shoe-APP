import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function Home() {
  return (
    <div>
      <React.Fragment>
          <CssBaseline />
              <h2 className="head-one">Online Order & Store Opening/Safety Info</h2>
          <Container maxWidth="lg" className="container1">
            <div>
              <h1 className="Header">"HV Shoe Store"</h1>
              <h2 className="Header-two">SHOE CARNIVAL ONLINE SHOE STORE: SHOP SALES ON SHOES FOR THE ENTIRE FAMILY</h2>
          </div>
      </Container>
              <img src="https://source.unsplash.com/weekly?shoe" alt="Shoe " className="Shoe-img"/>
    </React.Fragment>
    </div>
  );
}

export default Home;
