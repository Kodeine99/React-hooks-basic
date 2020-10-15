import React, {useState, useEffect} from 'react';
import './HomePage.scss';
import queryString from 'query-string';
import Pagination from './Components/Pagination';
import PostList from './Components/Post-List';
import PostFiltersForm from './Components/PostFiltersForm';
import Clock from './Components/Clock';
import Clock2 from './Components/Clock2';
import MagicBox from './Components/MagicBox';
// import TodoForm from './Components/Todo-form';
// import ColorBox from './Components/ColorBox';
// import TodoList from './Components/Todo-list';


function HomePage() {

  const [todoList, setTodoList] = useState([
    {id:1, title: 'Learn React hooks'},
    {id:2, title: 'Read a book'},
    {id:3, title: 'Learn English'}
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    // title_like: ''
  });

  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    async function fetchPostList() {
      // get data and update post list
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        // console.log({ responseJSON }); //test result

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }
    // console.log('useEffect1 is rendering'); //test
    fetchPostList();
  }, [filters]);

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

  // const {}

  function handlePageChange(newPage) {
    console.log('New page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    
    }) 
  }

  function handleFiltersChange(newFilters) {
    console.log('Filters change: ', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    })
  }

  return (
    <div className="App">
      {/* <h1>React hooks PostList</h1> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      
      {/* <PostFiltersForm onSubmit={handleFiltersChange}/>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
      
      {/* <h1>React hooks Clock</h1>
      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
      <Clock2 /> */}

      <MagicBox />
    </div>
  );
}

export default HomePage;
