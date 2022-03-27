import React from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import {
  ACTION_CLEAR_RULE_FIELD,
  ACTION_INPUT_ON,
} from '../../../ducks/buttonRules/actions';
import {
  patchButtonAction,
  pushButtonAction,
} from '../../../ducks/buttonList/actions';
import {
  isInputFormOpenedSelector,
  stylelistSelector,
} from '../../../ducks/buttonRules/selectors';

import { StateType } from '../../../redux/types';
import { ButtonListType } from '../../../ducks/buttonList/types';

import { InputForm } from './InputRules';
import { RulesDisplay } from './RulesDisplay';
import { RulesList } from './RulesList';

type Props = {
  buttonRules: any;
  isInputOpened: boolean;
  actionPushButton: (buttonToPush: ButtonListType) => void;
  actionInputOn: () => void;
  actionClearRuleField: () => void;
  actionPatchButton: (buttonRules: ButtonListType) => void;
};

const RulesBlock: React.FC<Props> = ({
  buttonRules,
  isInputOpened,
  actionPushButton,
  actionInputOn,
  actionClearRuleField,
  actionPatchButton,
}) => {
  const addRuleHandler = () => {
    actionInputOn();
  };

  const submitBtnHandler = () => {
    console.log(buttonRules);

    function getRandomNum() {
      return Math.floor(Math.random() * 10000000);
    }

    if ('id' in buttonRules) {
      actionPatchButton(buttonRules);
    } else {
      const buttonData = { id: getRandomNum(), name: 'button' };
      const buttonToPush = { ...buttonData, ...buttonRules };
      actionPushButton(buttonToPush);
    }

    actionClearRuleField();
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

const mapStateToProps = (state: StateType) => ({
  buttonRules: stylelistSelector(state),
  isInputOpened: isInputFormOpenedSelector(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StateType, void, AnyAction>
) => ({
  actionPushButton: (data: ButtonListType) => {
    dispatch(pushButtonAction(data));
  },
  actionInputOn: () => {
    dispatch(ACTION_INPUT_ON());
  },
  actionClearRuleField: () => {
    dispatch(ACTION_CLEAR_RULE_FIELD());
  },
  actionPatchButton: (data: ButtonListType) => {
    dispatch(patchButtonAction(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RulesBlock);
