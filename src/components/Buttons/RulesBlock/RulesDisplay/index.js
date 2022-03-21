import styled from 'styled-components';

export const RulesDisplay = ({ data }) => {
  //   console.log(data);
  let style = '';

  style = style.concat(
    data.map((i) => {
      return `${i.stylename}: ${i.stylevalue};`;
    })
  );

  style = style.split(',').join('');
  console.log(style);

  const ButtonStyled = styled.button`
    ${style}
  `;

  return <ButtonStyled>Example</ButtonStyled>;
};
