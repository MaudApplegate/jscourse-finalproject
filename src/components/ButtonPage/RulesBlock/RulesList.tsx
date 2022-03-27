import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_DELETE_RULE } from '../../../ducks/buttonRules/actions';
import { stylelistSelector } from '../../../ducks/buttonRules/selectors';

export const RulesList: React.FC = () => {
  const list = useSelector(stylelistSelector);
  const listArr: Array<Array<string>> = Object.entries(list);

  return (
    <div>
      {listArr.length === 0 && <h3>No rules yet...</h3>}
      <ul>
        {listArr.map(([key, value]: string[]) => {
          if (key !== 'id' && key !== 'name') {
            return (
              <li key={key}>
                {key} :
                {key.startsWith('&') ? (
                  <> {JSON.stringify(value)} </>
                ) : (
                  <>{value} </>
                )}
                <DeleteButton stylename={key} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

type PropsDeleteBtn = {
  stylename: string;
};

export const DeleteButton: React.FC<PropsDeleteBtn> = ({ stylename }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(ACTION_DELETE_RULE(stylename));
  };
  return <button onClick={deleteHandler}>x</button>;
};
