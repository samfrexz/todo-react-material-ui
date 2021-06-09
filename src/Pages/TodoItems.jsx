import Grid from '@material-ui/core/Grid'
// import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'


const itemStyles = makeStyles((theme) =>({
  grid: {
    background: '#ffff00',
  },
  divFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '0.5rem'
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.7rem',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '1rem',
    borderRadius: '7px',
    cursor: 'pointer',
    minHeight: theme.spacing(6)
  },
  pap: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.7rem',
    marginTop: '0.2rem',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '7px',
    minHeight: theme.spacing(12)
  },
  desc: {
    width: '89%',
    margin: '0 auto',
  },
  done: {
    background: '#004374',
    color: '#fff',
  }
}))

const TodoItems = ({ todo }) => {

  const classes = itemStyles()

  const pageWidth = document.body.offsetWidth;
  const pageThreshold = 650;
  
  const itemClass = todo.done ? classes.done : 'todo.item'
  
  const [description, setDescription] = useState(
    pageWidth > pageThreshold
  )

  const handleDescription =()=> {
    setDescription(!description)
    if (pageWidth <= pageThreshold) {
      setDescription(!description)
    } 
  }
  
  //   setDescription(false)
  // }
  
  
  return ( 
    <>
    
    <div onClick={handleDescription}>
      <Paper className={`${classes.paper} ${itemClass}`} >
      <Grid container>
        <Grid item xs={12}>
         <div className={classes.divFlex}>
         <Typography variant="h5">
          #{todo.num} &nbsp;&nbsp;&nbsp;&nbsp; {todo.title}
          </Typography>
          <Typography variant="h5">{todo.priority} </Typography>
         </div>
        </Grid>
        
      </Grid>
      </Paper>
      
     { description ? 
      <Paper className={classes.pap}>
      <Grid container>
      <Grid item xs={12}>
          <div className={classes.desc}>
          <Typography variant="h5" >{todo.description}</Typography>
          </div>
        </Grid>
      </Grid>
    </Paper> : ''
    }
    </div>
    
    </>
   );
}
 
export default TodoItems;