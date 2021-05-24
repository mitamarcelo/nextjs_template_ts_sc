import React, { useContext } from 'react';
import { AuthenticationContext } from 'context/FirebaseContext';
import { Button } from '@material-ui/core';
import { LoginBox } from 'components/StyledComponents/login.styles';

const Login = () => {
  const { login } = useContext(AuthenticationContext);
  return (
    <LoginBox>
      <Button variant="outlined" onClick={login}>
        Fazer Login com Google
      </Button>
    </LoginBox>
  );
};

export default Login;
