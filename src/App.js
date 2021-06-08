import React, { useState, } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
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

  // fetch("https://60bf66a397295a0017c42ab4.mockapi.io/todos")
  // .then(res => res.json())
  // .then(res => {
  //   console.log(res)
  // })

   const [allTodos, setAllTodos] = useState(
     [
      { title: "todo i", num: 1, description: "The API documentation of the Modal React component. Learn more about the props and the CSS", id: "0", done: false, priority: 0 },
      { title: "todo ii", num: 2, description: "The API documentation of the Modal React component. Learn more about the props and the CSS", id: "1", done: false, priority: 1 },
      { title: "todo iii", num: 3, description: "The API documentation of the Modal React component. Learn more about the props and the CSS", id: "2", done: true, priority: 1 },
      { title: "todo iv", num: 4, description: "The API documentation of the Modal React component. Learn more about the props and the CSS", id: "3", done: true, priority: 1 },
      { title: "todo v", num: 5, description: "The API documentation of the Modal React component. Learn more about the props and the CSS", id: "4", done: false, priority: 0 },
      { title: "todo vi", num: 6, description: "The API documentation of the Modal React component. Learn more about the props and the CSS", id: "5", done: true, priority: 0 },
      { title: "todo vii", num: 7, description: "The API documentation of the Modal React component. Learn more about the props and the CSS", id: "6", done: false, priority: 1 },
      { title: "todo viii", num: 8, description: "The API documentation of the Modal React component. Learn more about the props and the CSS", id: "7", done: false, priority: 1 },
    ]

   )

 
  const all = allTodos;
  const done = allTodos.filter(todo => todo.done);
  const pending = allTodos.filter(todo => !todo.done);

  const [todos, setTodos] = useState(allTodos)
  const [active, setActive] = useState('all')

  // let baseUrl = 'https://60bf66a397295a0017c42ab4.mockapi.io/todos'

  //   const getFootballApi = async () => {
  //     const res = await fetch(`${baseUrl}`)
  //      all = await res.json()
  //      done = res.filter(todo => todo.done);
  //      pending = res.filter(todo => !todo.done);
  //     console.log(all)
  //     return all
  //   }
  
  // let all, done, pending
  // useEffect(() => {
  //     fetch("https://60bf66a397295a0017c42ab4.mockapi.io/todos",)
  //     .then(res => res.json())
  //     .then(res => {
  //      all = res;
  //      done = res.filter(todo => todo.done)
  //      pending = res.filter(todo => !todo.done)
  //      setTodos(all)
  //       console.log(res)
  //     })
      
  //   },[])

  return (
    <>
    <ThemeProvider theme={theme}>

      <Header all={all} done={done} pending={pending} setTodos={setTodos} active={active} setActive={setActive} setAllTodos={setAllTodos} />
     
    <TodoList todos={todos} group={active} />

    
    </ThemeProvider>
    </>
  );
}

export default App;
