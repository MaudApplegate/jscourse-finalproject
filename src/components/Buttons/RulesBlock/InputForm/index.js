import { useId } from 'react-id-generator';
import { useDispatch } from 'react-redux';

import {
  ACTION_INPUT_OFF,
  ACTION_SET_RULE,
} from '../../../../ducks/stylebutton/actions';

export const InputForm = () => {
  const dispatch = useDispatch();
  // let nextRuleId = 0;

  const [testId] = useId();

  const closeInputHandler = () => {
    dispatch(ACTION_INPUT_OFF());
  };

  // const [inputData, setInputData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.stylename.value;
    const value = e.target.elements.stylevalue.value;
    dispatch(
      ACTION_SET_RULE({
        // id: nextRuleId++,
        id: testId,
        stylename: name,
        stylevalue: value,
        stringcss: `${name}:${value};`,
      })
    );
    dispatch(ACTION_INPUT_OFF());

    // setInputData([...inputData, { stylename: a, stylevalue: b }]);
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
