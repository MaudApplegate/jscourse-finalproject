import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { ACTION_DELETE_RULE } from '../../../../ducks/buttonRules/actions';
import { stylelistSelector } from '../../../../ducks/buttonRules/selectors';

export const StyledDiv = styled.div`
  h3 {
    text-align: center;
    color: #352371;
  }

  li {
    list-style: none;
  }

  button {
    height: 24px;
    width: 24px;
    color: #352371;
    font-weight: bold;
    cursor: pointer;
    border: solid 3px #352371;
    border-radius: 4px;
    margin: auto 15px;
    &: hover {
      background: #665d83;
      color: white;
    }
  }
`;

export const RulesList: React.FC = () => {
  const list = useSelector(stylelistSelector);
  const listArr: Array<Array<string>> = Object.entries(list);

  return (
    <StyledDiv>
      {listArr.length === 0 && <h3>No rules yet...</h3>}
      <ul>
        {listArr.map(([key, value]: string[]) => {
          if (key !== 'id' && key !== 'name') {
            return (
              <li key={key}>
                <DeleteButton stylename={key} />
                {key} :
                {key.startsWith('&') ? (
                  <> {JSON.stringify(value)} </>
                ) : (
                  <>{value} </>
                )}
              </li>
            );
          }
        })}
      </ul>
    </StyledDiv>
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
