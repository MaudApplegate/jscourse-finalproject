import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { stylelistSelector } from '../../../ducks/buttonRules/selectors';

const ButtonStyled = styled.button`
  ${(props) => props.propsstyle}
`;

export const RulesDisplay = () => {
  const stylelist = useSelector(stylelistSelector);

  const style = {};

  stylelist.map((i) => {
    style[i.stylename] = i.stylevalue;
  });

  return <ButtonStyled propsstyle={style}>Example</ButtonStyled>;
};
