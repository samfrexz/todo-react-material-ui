import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';




const modStyles = makeStyles((theme) =>({
  modBtn: {
    width: '94%',
    margin: '0.5rem auto'
  },
  txtInput: {
    margin: '0.7rem 0',
    
  },

}))



const Modals = ({handleClickOpen,
   handleClose,
    open,
     createTodo,
      setOpen,
       create,
       handleTitle,
       handlePriority,
       handleDescription,
       title,
       priority,
       description
      }) => {
  
  
const todo = {title,priority,description,num: 0, done:false}

  const classes = modStyles()


  return ( 
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <Typography variant="h4">
          Create Todo
          </Typography>
        </DialogTitle>
        <hr />
        <DialogContent>
          
          <form>
          <TextField
            className={classes.txtInput}
            onChange={handleTitle}
            id="name"
            value={title}
            variant="outlined"
            label="Enter title"
            type="text"
            fullWidth
          />

          <TextField
            className={classes.txtInput}
            id="outlined-number"
            label="Priority"
            type="number"
            value={priority}
            onChange={handlePriority}
            inputProps={{ min: 0}}
            variant="outlined"
            fullWidth
          />

        <TextField
          className={classes.txtInput}
          id="outlined-multiline-static"
          label="Enter description"
          value={description}
          onChange={handleDescription}
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />
          </form>
        </DialogContent>
          <hr />
        <DialogActions className={classes.modBtn}>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <Button onClick={ () => createTodo(todo)} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
   );
}
 
export default Modals;

