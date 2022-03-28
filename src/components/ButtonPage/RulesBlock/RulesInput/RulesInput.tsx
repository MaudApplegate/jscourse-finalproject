import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  ACTION_INPUT_OFF,
  ACTION_SET_RULE,
} from '../../../../ducks/buttonRules/actions';

const StyledForm = styled.form`
  position: absolute;
  z-index: 100;
  width: 500px;
  height: 200px;
  margin: auto;
  left: 50%;
  margin-left: -250px;
  margin-top: -150px;
  background: #c6a3d4;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.6);
  border-radius: 15px;

  input {
    padding: 10px;
    width: 40%;
    margin: 20px 20px;
    box-sizing: border-box;
    border-radius: 10px;
  }
`;

const StyledButton = styled.button`
  display: block;
  height: 24px;
  width: 24px;
  color: #352371;
  font-weight: bold;
  cursor: pointer;
  border: solid 3px #352371;
  border-radius: 4px;
  &: hover {
    background: #665d83;
    color: white;
  }
`;

const StyledButton1 = styled.button`
  display: block;
  margin: 20px auto;
  height: 30px;
  width: 60%;
  border-radius: 10px;
  font-size: 20px;
  background: #9462a8;
  color: white;
  cursor: pointer;

  &:hover {
    background: #73567e;
  }
`;

type FormSubmitType = {
  target: {
    elements: {
      stylename: { value: string };
      stylevalue: { value: string };
    };
  };
};

export const RulesInput = () => {
  const dispatch = useDispatch();

  const closeInputHandler = () => {
    dispatch(ACTION_INPUT_OFF());
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> & FormSubmitType
  ) => {
    e.preventDefault();
    const name = e.target.elements.stylename.value;
    const value = e.target.elements.stylevalue.value;
    dispatch(ACTION_SET_RULE({ name: name, value: value }));
    dispatch(ACTION_INPUT_OFF());
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledButton onClick={closeInputHandler}>x</StyledButton>
      <input placeholder="style name" name="stylename" />
      <label> : </label>
      <input placeholder="style value" name="stylevalue" />
      <StyledButton1>Add style</StyledButton1>
    </StyledForm>
  );
};
