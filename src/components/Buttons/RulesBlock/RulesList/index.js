import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ACTION_DELETE_RULE } from '../../../../ducks/stylebutton/actions';
import { stylelistSelector } from '../../../../ducks/stylebutton/selectors';

export const RulesList = () => {
  const list = useSelector(stylelistSelector);

  return (
    <div>
      {list.length === 0 && <h3>No rules yet...</h3>}
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.stylename} : {item.stylevalue}
            <DeleteButton id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const handlerDelete = () => {
    dispatch(ACTION_DELETE_RULE(id));
  };
  return <button onClick={handlerDelete}>x</button>;
};

// export const RulesList = ({ data, deletetest }) => {
//   return (
//     <>
//       {data.length === 0 && <h3>No rules yet...</h3>}
//       <ul>
//         {data.map((item) => (
//           <li key={item.stylename}>
//             {item.stylename} : {item.stylevalue}
//             <Button
//               itemname={item.stylename}
//               itemvalue={item.stylevalue}
//               delette={deletetest}
//               data={data}
//             />
//             {/* <button onClick={deleteHandler}>x</button> */}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// const Button = ({ itemname, itemvalue, delette, data }) => {
//   const deleteHandler = () => {
//     delette(
//       data.filter((i) => i.stylename !== itemname && i.stylevalue !== itemvalue)
//     );
//   };
//   return <button onClick={deleteHandler}>x</button>;
// };
