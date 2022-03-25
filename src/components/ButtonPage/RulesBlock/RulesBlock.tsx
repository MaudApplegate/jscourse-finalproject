import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useId } from 'react-id-generator';

import { pushButtonAction } from '../../../ducks/buttonPush/actions';
import { ACTION_INPUT_ON } from '../../../ducks/buttonRules/actions';
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

type Props = {
  buttonRules: StylelistType[];
  actionPushButton: any;
  isInputOpened: boolean;
  actionInputOn: () => void;
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
}) => {
  const addRuleHandler = () => {
    actionInputOn();
  };

  const [nextId] = useId();

  const submitBtnHandler = () => {
    const buttonToPush: ButtonToPush = {};

    buttonRules.map((i: StylelistType) => {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(RulesBlock);
