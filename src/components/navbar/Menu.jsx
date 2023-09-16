import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {

  return (
    <div className="d-flex align-items-center mb-3 ">

      <li className="nav-item mx-3 text-center">
        <NavLink to="/" style={({ isActive }) => ({
          color: isActive ? '#1d1d1f' : '#FFFFFF',
          background: isActive ? '#FFFFFF' : '#1d1d1f',
          textDecoration: 'none',
        })}>
          {props.menu1}
        </NavLink>
      </li>
      <li className="nav-item mx-3 text-center">
        <NavLink to="/category/salado" style={({ isActive }) => ({
          color: isActive ? '#1d1d1f' : '#FFFFFF',
          background: isActive ? '#FFFFFF' : '#1d1d1f',
          textDecoration: 'none',
        })}>{props.menu2}</NavLink>
      </li>

      <li className="nav-item mx-3 text-center">
        <NavLink to="/category/dulce" style={({ isActive }) => ({
          color: isActive ? '#1d1d1f' : '#FFFFFF',
          background: isActive ? '#FFFFFF' : '#1d1d1f',
          textDecoration: 'none',
        })}>{props.menu3}</NavLink>
      </li>
      <li className="nav-item mx-3 text-center">
        <NavLink to="/category/bebidas" style={({ isActive }) => ({
          color: isActive ? '#1d1d1f' : '#FFFFFF',
          background: isActive ? '#FFFFFF' : '#1d1d1f',
          textDecoration: 'none',
        })}>{props.menu4}</NavLink>
      </li>
    </div>
  );
};
export default Menu;