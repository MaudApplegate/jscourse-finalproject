import { useId } from 'react-id-generator';
import { useDispatch } from 'react-redux';

import {
  ACTION_INPUT_OFF,
  ACTION_SET_RULE,
} from '../../../ducks/buttonRules/actions';

export const InputForm = () => {
  const dispatch = useDispatch();
  const [nextId] = useId();

  const closeInputHandler = () => {
    dispatch(ACTION_INPUT_OFF());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.stylename.value;
    const value = e.target.elements.stylevalue.value;
    dispatch(
      ACTION_SET_RULE({
        id: nextId,
        stylename: name,
        stylevalue: value,
      })
    );
    dispatch(ACTION_INPUT_OFF());
  };

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={closeInputHandler}>x</button>
      <input placeholder="style name" name="stylename" />
      <label> : </label>
      <input placeholder="style value" name="stylevalue" />
      <button>Add style</button>
    </form>
  );
};