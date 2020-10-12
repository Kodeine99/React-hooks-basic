import React, {useState, useEffect} from 'react';
import './App.css';
import PostList from './Components/Post-List';
// import TodoForm from './Components/Todo-form';
// import ColorBox from './Components/ColorBox';
// import TodoList from './Components/Todo-list';


function App() {

  const [todoList, setTodoList] = useState([
    {id:1, title: 'Learn React hooks'},
    {id:2, title: 'Read a book'},
    {id:3, title: 'Learn English'}
  ]);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      // get data and update post list
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }
    // console.log('useEffect1 is rendering'); //test
    fetchPostList();
  }, []);

  useEffect(() => {
    console.log('useEffect2 is rendering')
  })

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form Submit: ', formValues);
    // add new todo
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>React hooks PostList</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

      <PostList posts={ postList } />
    </div>
  );
}

export default App;
