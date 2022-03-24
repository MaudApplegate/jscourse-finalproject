import { useId } from 'react-id-generator';
import { connect, useDispatch, useSelector } from 'react-redux';
import { pushButtonAction } from '../../../ducks/buttonPush/actions';

import { ACTION_INPUT_ON } from '../../../ducks/buttonRules/actions';
import {
  isInputFormOpenedSelector,
  stylelistSelector,
} from '../../../ducks/buttonRules/selectors';
import { InputForm } from './InputRules';
import { RulesDisplay } from './RulesDisplay';
import { RulesList } from './RulesList';

const RulesBlock = ({ buttonRules, actionPushButton }) => {
  const dispatch = useDispatch();
  const isInputOpened = useSelector(isInputFormOpenedSelector);

  const addRuleHandler = () => {
    dispatch(ACTION_INPUT_ON());
  };

  const [nextId] = useId();

  const submitBtnHandler = () => {
    const buttonToPush = {};

    buttonRules.map((i) => {
      buttonToPush.id = nextId;
      buttonToPush.name = 'Example';
      buttonToPush[i.stylename] = i.stylevalue;
    });

    actionPushButton(buttonToPush);
  };

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

const mapStateToProps = (state) => ({
  buttonRules: stylelistSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionPushButton: (data) => {
    dispatch(pushButtonAction(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RulesBlock);
