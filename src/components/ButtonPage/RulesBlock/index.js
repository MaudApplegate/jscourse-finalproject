import { useDispatch, useSelector } from 'react-redux';
import { ACTION_INPUT_ON } from '../../../ducks/buttonRules/actions';
import { isInputFormOpenedSelector } from '../../../ducks/buttonRules/selectors';
import { InputForm } from './InputForm';
import { RulesDisplay } from './RulesDisplay';
import { RulesList } from './RulesList';

export const RulesBlock = () => {
  const dispatch = useDispatch();
  const isInputOpened = useSelector(isInputFormOpenedSelector);

  const addRuleHandler = () => {
    dispatch(ACTION_INPUT_ON());
  };

  const submitBtnHandler = () => {};

  return (
    <div className="secondblock">
      <div className="rulesdisplay">
        <RulesDisplay />
      </div>
      <div className="rules">
        <RulesList />
        <button onClick={addRuleHandler}>Add rule</button>
        <button onClick={submitBtnHandler}>Submit</button>
      </div>
      {isInputOpened && <InputForm />}
    </div>
  );
};
