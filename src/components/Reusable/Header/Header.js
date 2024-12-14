// components/Header/Header.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, Button, Box, Typography, IconButton } from '@mui/material';
import { loginUser, logoutUser } from '../../../features/userSlice';
import Logo from '../../../assets/Logo.svg'; // Make sure to replace this path with your actual logo path

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
  
    const handleLogin = () => {
      // You can replace this with actual authentication logic
      dispatch(loginUser({ username: 'JohnDoe', email: 'johndoe@example.com' }));
    };
  
    const handleLogout = () => {
      dispatch(logoutUser());
    };
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' ,height:'6.94vw'}}>
    <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 ,marginLeft:'6.67vw'}}>
        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
          <img src={Logo} alt="Logo" style={{ height: 40 }} />
        </IconButton>

      </Box>

      {/* Conditionally render login/logout button */}
      {!user.isAuthenticated ? (
        <Button
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: '#FF7043',
            '&:hover': { backgroundColor: '#F4511E' },
            marginTop:"14px",
            marginRight:'6.67vw',
            width: '150px',  // Fixed width
            height: '49px',  // Fixed height
            gap: '10px',  // Space between icon and text (if any)
            borderRadius: '16px 16px 16px 16px',  // Rounded corners
            color: 'white',  // Text color
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: '#FF7043',
            '&:hover': { backgroundColor: '#F4511E' },
            width: '150px',  // Fixed width
            height: '49px',  // Fixed height
            marginTop:"14px",
            marginRight:'6.67vw',
            gap: '10px',  // Space between icon and text (if any)
            borderRadius: '16px 0px 0px 0px',  // Rounded corners
            opacity: 0,  // Opacity set to 0
            color: 'white',  // Text color
            '&:hover': {
              opacity: 0.8,  // Change opacity on hover (optional)
            },
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      )}
    </Toolbar>
  </AppBar>
  );
};

export default Header;
