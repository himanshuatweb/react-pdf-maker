import React,{useState, useEffect} from "react";
import Users from './Users';

import logo from './assets/logo.png'

import './App.css';


const App = () => {

  const [users, setUsers] = useState([]);

  useEffect( ()=>{
    async function fetchUser(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        setUsers(data)
    }
    fetchUser();
  },[])

  return (
    <div className="main">

        <div className="logo">
            <img src={logo} alt="pdfwiser-logo" />
        </div>

      <h1>Top 10 Performer of the week</h1>
      <Users users = {users} />

    </div>
  );
};

export default App;


