import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { stylelistSelector } from '../../../../ducks/buttonRules/selectors';

const ButtonStyled = styled.button`
  ${(props) => props.propsstyle}
`;

export const RulesDisplay = () => {
  const stylelist = useSelector(stylelistSelector);
  const arr = [];
  stylelist.map((i) => arr.push(i.stringcss));
  const stringcss = arr.join(';').split(',');
  console.log(stringcss);

  const test = {};

  stylelist.map((i) => {
    test[i.stylename] = i.stylevalue;
  });
  console.log(test);

  return <ButtonStyled propsstyle={test}>Example</ButtonStyled>;
};
