import React, { useState, useEffect } from 'react';
import styles from './userList.module.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.userListContainer}>
      <h2>Lista de Usuarios</h2>
      <ul className={styles.userList}>
        {users.map(user => (
          <li key={user.id} className={styles.userItem}>
            <p><strong>Nombre de usuario:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;