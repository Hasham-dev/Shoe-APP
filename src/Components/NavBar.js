import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  Nav:{
    color:"white",
    margin:"4px",
    textDecoration: "none",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">

          <Typography  variant="h6" color="inherit">
            <div className={classes.NavHead}>
            <Link className={classes.Nav} to='/'>Home</Link>
            <Link className={classes.Nav} to='/about'>About</Link>
            <Link className={classes.Nav} to='/product'>Product</Link>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}



export default Navbar;
