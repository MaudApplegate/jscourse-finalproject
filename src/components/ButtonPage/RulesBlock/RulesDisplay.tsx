import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { stylelistSelector } from '../../../ducks/buttonRules/selectors';
import { StylelistType } from '../../../ducks/buttonRules/types';

type PropsStyled = { propsstyle: { [key: string]: string } };

const ButtonStyled = styled.button<PropsStyled>`
  ${(props) => props.propsstyle}
`;

export const RulesDisplay: React.FC = () => {
  const stylelist = useSelector(stylelistSelector);
  console.log(stylelist);

  const style: { [key: string]: string } = {};

  stylelist.map((i: StylelistType) => {
    style[i.stylename] = i.stylevalue;
  });

  console.log(style);

  return <ButtonStyled propsstyle={style}>Example</ButtonStyled>;
};
