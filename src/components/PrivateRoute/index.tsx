import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { auth } from '../../services/firebase/firebase';
import { userSelector } from '../../ducks/auth/selectors';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background: #b4a9d7;
  &:hover {
    background: #665d83;
  }
`;

type Props = {
  children: React.ReactNode;
};

const Private: React.FC<Props> = ({ children }) => {
  const user = useSelector(userSelector);

  const logOut = async () => {
    await auth.signOut();
  };

  return user ? (
    <>
      <StyledButton onClick={logOut}> Log Out </StyledButton>
      {children}
    </>
  ) : (
    <Navigate to={'/signin'} />
  );
};

export default Private;
