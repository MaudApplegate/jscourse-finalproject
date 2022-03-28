import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledForm = styled.form`
  max-width: 400px;
  min-height: 400px;
  box-sizing: border-box;
  background: white;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  margin: 20px auto;
  padding: 25px;
  color: #414141;
  font-size: 18px;

  h2 {
    text-align: center;
  }

  input {
    display: block;
    padding: 10px;
    width: 100%;
    margin: 15px auto;
    box-sizing: border-box;
    border-radius: 10px;
  }

  button {
    display: block;
    margin: auto;
    height: 30px;
    width: 100%;
    border-radius: 10px;
    font-size: 20px;
    background: #9462A8;
    color: white;
    cursor: pointer;

    &:hover {
      background: #73567E;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;