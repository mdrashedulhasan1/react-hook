import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setUsers(data))
  })
const {userId, id, title} = users;
  return (
    <div className="App">
        <h1>Total users: {users.length}</h1>
        <h3>UserId: {userId}</h3>
        <h2>Id: {id}</h2>
        <h3>Title: {title}</h3>
    </div>
  );
}

export default App;
