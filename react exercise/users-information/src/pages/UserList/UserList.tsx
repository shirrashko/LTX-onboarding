import React, { useEffect, useState } from 'react';
import './UserList.scss';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=25')
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="user-info-container">
      <h2>Users</h2>
      <div className="table-container">
        <table className="user-info-table">
          <thead className="table-head">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.address.city}, {user.address.state}, {user.address.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
