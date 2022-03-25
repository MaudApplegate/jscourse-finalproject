import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useId } from 'react-id-generator';

import { pushButtonAction } from '../../../ducks/buttonPush/actions';
import {
  ACTION_CLEAR_RULE_FIELD,
  ACTION_INPUT_ON,
} from '../../../ducks/buttonRules/actions';
import {
  globalIdSelector,
  isInputFormOpenedSelector,
  stylelistSelector,
} from '../../../ducks/buttonRules/selectors';

import { StateType } from '../../../redux/types';
import { StylelistType } from '../../../ducks/buttonRules/types';
import { ButtonList } from '../../../ducks/buttonList/types';

import { InputForm } from './InputRules';
import { RulesDisplay } from './RulesDisplay';
import { RulesList } from './RulesList';
import {
  ACTION_PATCH_BUTTON,
  patchButtonAction,
} from '../../../ducks/buttonPush/buttonPatchAction';

type Props = {
  buttonRules: StylelistType[];
  actionPushButton: any;
  isInputOpened: boolean;
  actionInputOn: () => void;
  actionClearRuleField: () => void;
  globalId: string | null;
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
  globalId,
  actionPatchButton,
}) => {
  const addRuleHandler = () => {
    actionInputOn();
  };

  const [nextId] = useId();

  const submitBtnHandler = () => {
    const buttonToPush: ButtonToPush = {};

    buttonToPush.name = 'Example';

    buttonRules.map((i: StylelistType) => {
      buttonToPush[i.stylename] = i.stylevalue;
    });

    if (globalId) {
      buttonToPush.id = globalId;
      actionPatchButton(buttonToPush);
    } else {
      buttonToPush.id = nextId;
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
  globalId: globalIdSelector(state),
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
