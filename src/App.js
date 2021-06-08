import React, { useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
// import TodoItems from './Pages/TodoItems';
import Header from './Pages/Header';
import TodoList from './Pages/TodoList';





const theme = createMuiTheme({
  typography: {
    fontFamily: 'Nunito',
    fontWeightLight: '400',
    fontWeightRegular: '600',
    fontWeightMedium: '700',
    fontWeightBold: '800',
  }
})


function App() {
  const allTodos = [
    { title: "todo 1", num: 0, description: "The API documentation of the Modal React component. Learn more about the props and the CSS...", done: false, priority: 0 },
    { title: "todo 2", num: 1, description: "The API documentation of the Modal React component. Learn more about the props and the CSS...", done: false, priority: 1 },
    { title: "todo 3", num: 2, description: "The API documentation of the Modal React component. Learn more about the props and the CSS...", done: true, priority: 1 },
    { title: "todo 4", num: 3, description: "The API documentation of the Modal React component. Learn more about the props and the CSS...", done: true, priority: 1 },
    { title: "todo 5", num: 4, description: "The API documentation of the Modal React component. Learn more about the props and the CSS...", done: false, priority: 0 },
    { title: "todo 6", num: 5, description: "The API documentation of the Modal React component. Learn more about the props and the CSS...", done: true, priority: 0 },
    { title: "todo 7", num: 6, description: "The API documentation of the Modal React component. Learn more about the props and the CSS...", done: false, priority: 1 },
    { title: "todo 8", num: 7, description: "The API documentation of the Modal React component. Learn more about the props and the CSS...", done: false, priority: 1 },
  ];

  const all = allTodos;
  const done = allTodos.filter(todo => todo.done);
  const pending = allTodos.filter(todo => !todo.done);

  const [todos, setTodos] = useState(allTodos)

  // const createTodo =(todo)=> {
  //   // duplicating new Array
  //   const newTodos = todos.slice()
  //   // adding the new todo from the beginning
  //   newTodos.unshift(todo)
  //   console.log(11)
  // }
  
 

  return (
    <>
    <ThemeProvider theme={theme}>

      <Header all={all} done={done} pending={pending} setTodos={setTodos} />
     
    <TodoList todos={todos} />
    </ThemeProvider>
    </>
  );
}

export default App;
