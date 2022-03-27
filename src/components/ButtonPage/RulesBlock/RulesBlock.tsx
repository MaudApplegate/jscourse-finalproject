import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { pushButtonAction } from '../../../ducks/buttonPush/actions';
import {
  ACTION_CLEAR_RULE_FIELD,
  ACTION_INPUT_ON,
} from '../../../ducks/buttonRules/actions';
import {
  isInputFormOpenedSelector,
  stylelistSelector,
} from '../../../ducks/buttonRules/selectors';

import { StateType } from '../../../redux/types';
import { StylelistType } from '../../../ducks/buttonRules/types';
import { ButtonList } from '../../../ducks/buttonList/types';

import { InputForm } from './InputRules';
import { RulesDisplay } from './RulesDisplay';
import { RulesList } from './RulesList';
import { patchButtonAction } from '../../../ducks/buttonPush/buttonPatchAction';

type Props = {
  buttonRules: StylelistType[];
  actionPushButton: any;
  isInputOpened: boolean;
  actionInputOn: () => void;
  actionClearRuleField: () => void;
  actionPatchButton: any;
};

export type ButtonToPush = {
  id?: string;
  name?: string;
  [key: string]: any;
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

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, void, Action>) => ({
  actionPushButton: (data: ButtonList) => {
    dispatch(pushButtonAction(data));
  },
  actionInputOn: () => {
    dispatch(ACTION_INPUT_ON());
  },
  actionClearRuleField: () => {
    dispatch(ACTION_CLEAR_RULE_FIELD());
  },
  actionPatchButton: (data: any) => {
    dispatch(patchButtonAction(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RulesBlock);
