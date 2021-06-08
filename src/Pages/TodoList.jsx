import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import React from 'react'
import TodoItems from './TodoItems';


const TodoList = ( {todos}) => {

  

  return ( 
    <>
    <Container>
      {
        todos.map((todo) => (
          <Grid container  key={todo.id}>
            <Grid item xs={12} lg={12}>

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