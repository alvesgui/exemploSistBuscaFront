import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User';

import api from './services/api';

function App() {

  const [users, setUsers] = useState([])
  const [term, setTerm] = useState('')

  async function searchUsers(term){
    const response = await api.get(`?search=${term}`);
    setUsers(response.data.users)
  }

  // useEffect( () => {
  //   async function searchUsers(term){
  //     const response = await api.get('/');
  //     setUsers(response.data.users)
  //   }
  
  //   searchUsers(term);
  // }, []);

  return (
    <>

      <input type="text" onKeyDown={ (e) => { setTerm(e.value) } } />

      <div className="btn" onClick={ () => { searchUsers(term); } }>Buscar</div>

      <div className="users-wrapper">

      {users.map(user => (
          <User key={ user.login } url={ `https://instagram.com/${user.login}` } name={ user.name } username={ user.login } img={ user.img } />    
      ))}

      </div>
    </>
  );
}


export default App;
