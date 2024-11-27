import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('http://1127-test-02-288167636.ap-northeast-2.elb.amazonaws.com:8080/api/boards')
      .then(response => {
        setBoards(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the boards!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Boards</h1>
      <ul>
        {boards.map(board => (
          <li key={board.id}>
            <p>Name: {board.name}</p>
            <p>Address: {board.addr}</p>
            <p>Birthday: {board.birthday}</p>
            <p>Mobile: {board.mobile}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;