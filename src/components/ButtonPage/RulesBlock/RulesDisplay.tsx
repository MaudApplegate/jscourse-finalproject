import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { stylelistSelector } from '../../../ducks/buttonRules/selectors';
import { RulesListType } from '../../../ducks/buttonRules/types';

type PropsStyled = { propsstyle: RulesListType };

const ButtonStyled = styled.button<PropsStyled>`
  ${(props) => props.propsstyle}
`;

export const RulesDisplay: React.FC = () => {
  const stylelist = useSelector(stylelistSelector);

  return <ButtonStyled propsstyle={stylelist}>Example</ButtonStyled>;
};
