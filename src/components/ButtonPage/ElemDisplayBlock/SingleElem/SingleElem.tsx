import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  ACTION_CLEAR_RULE_FIELD,
  ACTION_PATCH_RULES,
} from '../../../../ducks/buttonRules/actions';
import { buttonsListSelector } from '../../../../ducks/buttonList/selectors';

import { ButtonListType } from '../../../../ducks/buttonList/types';

const ButtonStyled = styled.button<PropsStyled>`
  ${(props) => props.propsstyle}
`;

type PropsStyled = { propsstyle: ButtonListType };

type Props = {
  id: string;
  propsstyle: ButtonListType;
};

export const SingleElem: React.FC<Props> = ({ id, propsstyle }) => {
  const ButtonListData = useSelector(buttonsListSelector);
  const dispatch = useDispatch();

  const buttonChangeHandler = () => {
    dispatch(ACTION_CLEAR_RULE_FIELD());
    const elem: any = ButtonListData.find((el) => el.id === id);
    dispatch(ACTION_PATCH_RULES(elem));
  };

  return (
    <ButtonStyled propsstyle={propsstyle} onClick={buttonChangeHandler}>
      Example
    </ButtonStyled>
  );
};
