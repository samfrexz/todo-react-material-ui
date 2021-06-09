import React, { useState, useEffect } from 'react'
import { createMuiTheme, ThemeProvider,  } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Header from './Pages/Header';
import TodoList from './Pages/TodoList';
import { TodoLoader } from './Components/TodoLoader';





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

     let all = allTodos;
     let done = allTodos.filter(todo => todo.done);
     let pending = allTodos.filter(todo => !todo.done);
     
     let [todos, setTodos] = useState(allTodos)
     const [active, setActive] = useState('all')
     const [search, setSearch] = useState("")
     const [todoLoading, setTodoLoading] = useState(true)

    //  let all, done, pending;

    const setView =(view, search)=> {
      todos = allTodos || []

      switch (view) {
        case "pending":
           todos = todos.filter(todo => !todo.done);
          break;
        case "done":
           todos = todos.filter(todo => todo.done);
          break;
        default:
          view = "all"
          break;
      }
    }
     
      // search filter by title
    if(search) {
      todos = todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()) || 
      todo.description.toLowerCase().includes(search.toLowerCase())
      )
    //  todos.filter(todo => todo.description.toLowerCase().includes(search.toLowerCase()))

    }

    useEffect(() => {
      setView(active, search)
    }, [active, search])

    useEffect(() => {
        fetch("https://60bf66a397295a0017c42ab4.mockapi.io/todos")
      .then(res => res.json())
      .then(res => {
    
       setAllTodos(res)
       setTodos(res)
       setTodoLoading(!todoLoading)
        console.log(res)
      })
      
    },[])

  return (
    <>
    <ThemeProvider theme={theme}>

      <Header all={all}
       done={done}
        pending={pending}
         setTodos={setTodos}
          active={active}
           setActive={setActive}
            setAllTodos={setAllTodos}
            search={search}
            setSearch={setSearch}
             />
     
     { todoLoading ? <Container><TodoLoader /></Container>  :
      (todos && todos.length 
      ? <TodoList todos={todos} group={active} />
      : <Container><Typography>No todos available</Typography></Container>
      )
     }
    
    </ThemeProvider>
    </>
  );
}

export default App;
