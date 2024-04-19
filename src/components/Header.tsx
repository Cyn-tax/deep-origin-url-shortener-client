import React from 'react';
import { logout } from "../api/authApi";

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ setToggle, toggle }) => {
  const handleLogout = () => {
    logout();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto">
        <ul className="flex items-center justify-between">
          {
            toggle ?
              <li><h1 className="text-xl cursor-pointer" onClick={() => { setToggle(false) }}>Shortened Url Form</h1></li>
              :
              <li><h1 className="text-xl cursor-pointer" onClick={() => { setToggle(true) }}>My List</h1></li>
          }
          <li><button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
