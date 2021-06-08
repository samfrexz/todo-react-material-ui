import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import  Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Modals from './Modal';



const appStyles = makeStyles((theme) => ({
  toolBar: {
    flexGrow: '1',
    background: '#004374',
    minHeight: '13vh',
    
  },
  Container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btnContainer: {
    marginTop: '10rem',
    marginBottom: '2rem',
  },
  addBtn: {
    background: '#fff',
    color: '#004374',
    fontSize: '1.3rem',
    padding: '0.6rem 1rem',
    textTransform: 'capitalize',
    '&:hover': {
      background: '#fff',
    }
  },
  btn: {
    background: '#fff',
    color: '#004374',
    marginLeft: '1rem',
    padding: '0.7rem 0.4rem',
    justifyContent: 'left',
    textTransform: 'capitalize',
    fontSize: '1.3rem',
    fontWeight: '800',
    minWidth: '20%',
    '&:hover': {
      background: '#fff',
    }
  },
  btnn: {
    background: '#fff',
    color: '#004374',
    padding: '0.7rem 0.4rem',
    justifyContent: 'left',
    textTransform: 'capitalize',
    fontSize: '1.3rem',
    fontWeight: '800',
    minWidth: '20%',
    '&:hover': {
      background: '#fff',
    }
  },
  btnActv: {
    background: '#004374',
    color: '#fff',
    marginLeft: '1rem',
    padding: '0.7rem 0.4rem',
    justifyContent: 'left',
    textTransform: 'capitalize',
    fontSize: '1.3rem',
    fontWeight: '800',
    minWidth: '20%',
    '&:hover': {
      background: '#004374',
      color: '#fff'
    }
  },
  btnnActv: {
    background: '#004374',
    color: '#fff',
    padding: '0.7rem 0.4rem',
    justifyContent: 'left',
    textTransform: 'capitalize',
    fontSize: '1.3rem',
    fontWeight: '800',
    minWidth: '20%',
    '&:hover': {
      background: '#004374',
      color: '#fff'
    }
  }
}))






const Header = ({all, done, pending, setTodos, }) => {

  const [active, setActive] = useState('all')

  
 
  const handleAll =()=> {
    setTodos(all)
    setActive('all')
  }

  const handleDone =()=> {
    setTodos(done)
    setActive('done')
  }

  const handlePending =()=> {
    setTodos(pending)
    setActive('pending')
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log(11)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createTodo =(todo)=> {
    // duplicating new Array
    const newTodos = all.slice()
    // adding the new todo from the beginning
    newTodos.unshift(todo)
    setTodos(newTodos)
    setOpen(false)
    console.log(11)
  }

  const classes = appStyles()

  return ( 
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolBar}>
          <Container className={classes.Container}>
           
            <Typography variant="h4">Skill Up Todo</Typography>
            <Button
            className={classes.addBtn}
            onClick={handleClickOpen}
             variant="contained"
             endIcon={<AddIcon />}
             >Add Todo</Button>
            
          </Container>
        </Toolbar>
      </AppBar> 

      <Container className={classes.btnContainer}>
      
        <Button className={active ==='all' ? classes.btnnActv : classes.btnn} onClick={handleAll} variant="contained">All</Button>
        <Button className={active ==='done' ? classes.btnActv : classes.btn} onClick={handleDone} variant="contained">Done</Button>
        <Button className={active ==='pending' ? classes.btnActv : classes.btn} onClick={handlePending} variant="contained">Pending</Button>

        <Grid container style={{marginTop: '2rem'}}>
        <Grid item xs={12}>
        
         <TextField 
         style={{background: '#fff', outline: 'none',}}
          variant="outlined"
          id="input-with-icon-textfield"
          label="Search"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          />
        </Grid>

       <Modals
        
         handleClose={handleClose}
         open={open}
        createTodo={createTodo} /> 
        
      </Grid>
      </Container>

      
    </>
   );
}
 
export default Header;