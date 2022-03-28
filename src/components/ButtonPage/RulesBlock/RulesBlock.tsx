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

import { RulesInput } from './RulesInput/RulesInput';
import { RulesDisplay } from './RulesDisplay/RulesDisplay';
import { RulesList } from './RulesList/RulesList';

import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 10px auto;
  width: 100%;
  position: relative;
`;

const StyledDivDisplay = styled.div`
  width: 50%;
  min-height: 200px;
  float: left;
  text-align: center;
  border: solid 6px #352371;
  border-radius: 20px;
  background: white;
  box-sizing: border-box;

  button {
    margin: 40px 20px;
  }
`;

const StyledDivList = styled.div`
  width: 48%;
  min-height: 200px;
  float: right;
  position: relative;
`;

const StyledBtnCont = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  top: 100%;
  bottom: -30px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 80px;
    height: 30px;
    margin: auto 15px;
    border: solid 3px #352371;
    border-radius: 2px;
    background-color: #ffffff;
    color: #352371;
    font-weight: 600;
    cursor: pointer;

    &: hover {
      background: #665d83;
      color: white;
    }
  }
`;

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
    <StyledDiv>
      <StyledDivDisplay>
        <RulesDisplay />
      </StyledDivDisplay>
      <StyledDivList>
        <RulesList />
        <StyledBtnCont>
          <button onClick={addRuleHandler}>Add rule</button>
          <button onClick={submitBtnHandler}>Submit</button>
        </StyledBtnCont>
      </StyledDivList>
      {isInputOpened && <RulesInput />}
    </StyledDiv>
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
