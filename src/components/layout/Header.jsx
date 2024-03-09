import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">Todo</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      </header>
    );
}

export default Header;
