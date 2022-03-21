import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_INPUT_ON } from '../../../ducks/stylebutton/actions';
import { isInputFormOpenedSelector } from '../../../ducks/stylebutton/selectors';
import { InputForm } from './InputForm';
import { RulesDisplay } from './RulesDisplay';
import { RulesList } from './RulesList';

export const RulesBlock = () => {
  // const [isInputOpened, setInputOpened] = useState(false);

  const dispatch = useDispatch();
  const isInputOpened = useSelector(isInputFormOpenedSelector);

  const addRuleHandler = () => {
    // setInputOpened(true);
    dispatch(ACTION_INPUT_ON());
  };

  return (
    <div className="secondblock">
      <div className="rulesdisplay">
        <RulesDisplay />
      </div>
      <div className="rules">
        {/* <RulesList data={inputData} deletetest={setInputData} /> */}
        <RulesList />
        <button onClick={addRuleHandler}>Add rule</button>
        <button>Submit</button>
      </div>
      {isInputOpened && <InputForm />}
    </div>
  );
};
