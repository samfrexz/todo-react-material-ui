import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import React from 'react'
import TodoItems from './TodoItems';


const TodoList = ( {todos}) => {

  

  return ( 
    <>
    <Container>
      {
        todos.map((todo, index) => (
          <Grid container>
            <Grid item xs={12} lg={12} key={index}>
              <TodoItems todo={todo} />
            </Grid>
          </Grid>
        ))
      }
    </Container>
    </>
   );
}
 
export default TodoList;