import { useDispatch, useSelector } from 'react-redux';
import { ACTION_DELETE_RULE } from '../../../ducks/buttonRules/actions';
import { stylelistSelector } from '../../../ducks/buttonRules/selectors';

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
  const deleteHandler = () => {
    dispatch(ACTION_DELETE_RULE(id));
  };
  return <button onClick={deleteHandler}>x</button>;
};
