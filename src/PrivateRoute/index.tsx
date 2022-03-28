import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { auth } from '../services/firebase/firebase';
import { userSelector } from '../ducks/auth/selectors';

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
      <button onClick={logOut}> Log Out </button>
      {children}
    </>
  ) : (
    <Navigate to={'/signin'} />
  );
};

export default Private;
