import styled from 'styled-components';

export const RulesList = ({ data, deletetest }) => {
  return (
    <>
      {data.length === 0 && <h3>No rules yet...</h3>}
      <ul>
        {data.map((item) => (
          <li key={item.stylename}>
            {item.stylename} : {item.stylevalue}
            <Button
              itemname={item.stylename}
              itemvalue={item.stylevalue}
              delette={deletetest}
              data={data}
            />
            {/* <button onClick={deleteHandler}>x</button> */}
          </li>
        ))}
      </ul>
    </>
  );
};

const Button = ({ itemname, itemvalue, delette, data }) => {
  const deleteHandler = () => {
    delette(
      data.filter((i) => i.stylename !== itemname && i.stylevalue !== itemvalue)
    );
  };
  return <button onClick={deleteHandler}>x</button>;
};
