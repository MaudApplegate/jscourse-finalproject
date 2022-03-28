import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { deleteButtonAction } from '../../../ducks/buttonList/actions';

type PropsDeleteBtn = {
  id: string;
};

const StyledButton = styled.button`
  margin: auto;
  height: 24px;
  width: 24px;
  color: #352371;
  font-weight: bold;
  cursor: pointer;
  border: solid 3px #352371;
  border-radius: 4px;
  &: hover {
    background: #665d83;
    color: white;
  }
`;

export const DeleteElem: React.FC<PropsDeleteBtn> = ({ id }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteButtonAction(id));
  };
  return <StyledButton onClick={deleteHandler}>x</StyledButton>;
};
