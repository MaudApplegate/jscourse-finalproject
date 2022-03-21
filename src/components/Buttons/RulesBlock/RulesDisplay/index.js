import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { stylelistSelector } from '../../../../ducks/stylebutton/selectors';

export const RulesDisplay = () => {
  const stylelist = useSelector(stylelistSelector);
  const arr = [];
  stylelist.map((i) => arr.push(i.stringcss));
  const stringcss = arr.join().split(',');
  const ButtonStyled = styled.button`
    ${stringcss}
  `;
  return <ButtonStyled>Example</ButtonStyled>;
};

// export const RulesDisplay = ({ data }) => {
//   //   console.log(data);
//   let style = '';

//   style = style.concat(
//     data.map((i) => {
//       return `${i.stylename}: ${i.stylevalue};`;
//     })
//   );

//   style = style.split(',').join('');
//   console.log(style);

//   const ButtonStyled = styled.button`
//     ${style}
//   `;

//   return <ButtonStyled>Example</ButtonStyled>;
// };
