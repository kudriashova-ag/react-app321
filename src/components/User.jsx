import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(null);

  const getUser = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, [id]);

  if (loading !== false) {
    return "Loading...";
  }

  return (
    <div>
      <h1>User</h1>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
      <div>{user.address.city}</div>
    </div>
  );
};

export default User;
