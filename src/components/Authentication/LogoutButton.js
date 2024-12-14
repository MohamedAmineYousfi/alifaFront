import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/userSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
