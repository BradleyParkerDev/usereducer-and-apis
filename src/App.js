import './App.css';
import { useState, useReducer, useEffect } from 'react';
import requestReducer from './reducers/requestReducer';

function App(props) {

  //Reducer
  const [request, dispatch] = useReducer(requestReducer, 0)

  //States
  const [posts, setPosts] = useState({});
  const [todos, setTodos] = useState({});
  const [users, setUsers] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [requestType, setRequestType] = useState("posts");
  const [shouldRefresh, setShouldRefresh] = useState(false);

  //API fetches
  useEffect((props)=>{
    console.log(request)
    if(request === 1){
      const getAllPosts = async () =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}`);
        const data = await response.json();
        console.log(data);
        setPosts(data);
        setShouldRefresh(false);
        
      }
      getAllPosts();
    }

    if(request === 2){
      const getAllTodos = async () =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${inputValue}`);
        const data = await response.json();
        console.log(data);
        setTodos(data);
        setShouldRefresh(false);

      }
      getAllTodos();

    }

    if(request === 3) {
      const getAllUsers = async () =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${inputValue}`);
        const data = await response.json();
        console.log(data);
        setUsers(data);
        setShouldRefresh(false);

      } 
      getAllUsers();
    }


  
  },[request, shouldRefresh])

  //console.log(posts)

  const handleSelection = (e) =>{
    setRequestType(e.target.value)
    console.log(requestType)

  }
  const handleChange = (e) =>{
    setInputValue(e.target.value)
    console.log(inputValue)

  }

  const handleDispatch = () =>{
    dispatch({requestType: requestType})

    setShouldRefresh(true)

  }



  return (
    <div id="container">
      <div id="div1">
        <select 
        id="requests"
        onChange={handleSelection}
        >
          <option value="posts">Posts</option>
          <option value="todos">Todos</option>
          <option value="users">Users</option>

        </select>
        <input type="number" onChange={handleChange}
/>
        <button
        onClick={handleDispatch}
        >
          Make Request
        </button>
      </div>
      <div id="div2">

      </div>      
    </div>

  );
}

export default App;
