import React from 'react';
// import firebase from 'firebase';
import firebase from './firebase';

export const AuthContext = React.createContext<firebase.User | null>(null);
