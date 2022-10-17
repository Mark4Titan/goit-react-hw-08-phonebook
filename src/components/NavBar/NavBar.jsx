import { useNavigate } from 'react-router-dom';
import { AppBarStyled } from './NavBar.styled';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/authOperations';

const ResponsiveAppBar = () => {
  const isloggedIn = useSelector(state => state.auth.isLoggedIn);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseNavMenu = e => navigate(e.currentTarget.dataset.link);

  const logout = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <AppBarStyled position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {!isloggedIn && (
            <Button
              data-link="/"
              data-name="Home Page"
              key="Home Page"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home Page
            </Button>
          )}

          <Box sx={{ flexGrow: 1 }}></Box>

          {isloggedIn && (
            <Button
              data-link="/"
              data-name="Logout"
              key="Logout"
              onClick={logout}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
export default ResponsiveAppBar;
