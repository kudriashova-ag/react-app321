import React, { useEffect, useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useSearchParams();
  const [searchText, setSearchText] = useState(search.get("q"));

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersJson = await response.json();
    setUsers(usersJson);
  };

  const searchHandler = (e) => {
    setSearchText(e.target.value);
    setSearch({ q: e.target.value });
  };

  const filterUser = (user) => {
    return user.name.includes(searchText);
  };

  return (
    <div className="users">
      <div>
        <h1>Users</h1>

        <input type="text" value={searchText} onChange={searchHandler} />

        {users.filter(filterUser).map((user) => (
          <div key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Users;
