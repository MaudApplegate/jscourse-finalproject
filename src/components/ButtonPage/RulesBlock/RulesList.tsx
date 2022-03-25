import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_DELETE_RULE } from '../../../ducks/buttonRules/actions';
import { stylelistSelector } from '../../../ducks/buttonRules/selectors';
import { StylelistType } from '../../../ducks/buttonRules/types';

export const RulesList: React.FC = () => {
  const list = useSelector(stylelistSelector);

  return (
    <div>
      {list.length === 0 && <h3>No rules yet...</h3>}
      <ul>
        {list.map((item: StylelistType) => (
          <li key={item.id}>
            {item.stylename} : {item.stylevalue}
            <DeleteButton id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

type PropsDeleteBtn = {
  id: string;
};

export const DeleteButton: React.FC<PropsDeleteBtn> = ({ id }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(ACTION_DELETE_RULE(id));
  };
  return <button onClick={deleteHandler}>x</button>;
};
