import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Greatings, TextBox } from './HomeView.styled';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { setPath } from 'redux/auth/authSlice';

const HomeView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const onSignUp = () => {
    navigate('/register');
  };
  const onLogIn = () => {
    navigate('/login');
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(setPath('/contacts'));
      navigate('/contacts');
    }
  }, [dispatch, isLoggedIn, navigate]);
  return (
    <TextBox>
      {!isLoggedIn && (
        <>
          <Greatings>Welcome! You visited the contacts service</Greatings>
          <Greatings>
            <Button
              sx={{
                textTransform: 'none',
                fontWeight: 'bolder',
                fontSize: '28px',
                textDecoration: 'underline',
              }}
              onClick={onSignUp}
            >
              Sign up
            </Button>{' '}
            or
            <Button
              sx={{
                textTransform: 'none',
                fontWeight: 'bolder',
                fontSize: '28px',
                textDecoration: 'underline',
              }}
              onClick={onLogIn}
            >
              Log In
            </Button>
          </Greatings>
        </>
      )}
    </TextBox>
  );
};
export default HomeView;
