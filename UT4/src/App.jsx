import React from 'react';
import './App.css';
import UserList from './components/UserList/userList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicación de Usuarios</h1>
        <UserList />
      </header>
    </div>
  );
}

export default App;