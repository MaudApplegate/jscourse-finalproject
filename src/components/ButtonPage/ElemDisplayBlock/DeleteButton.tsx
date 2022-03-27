import { useDispatch } from 'react-redux';

import { deleteButtonAction } from '../../../ducks/buttonList/actions';

type PropsDeleteBtn = {
  id: string;
};

export const DeleteButton: React.FC<PropsDeleteBtn> = ({ id }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteButtonAction(id));
  };
  return <button onClick={deleteHandler}>x</button>;
};
