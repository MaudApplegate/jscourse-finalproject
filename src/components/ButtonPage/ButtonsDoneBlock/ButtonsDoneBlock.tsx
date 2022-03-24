import React, { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import { getButtonsAction } from '../../../ducks/buttonList/actions';
import { buttonsListSelector } from '../../../ducks/buttonList/selectors';
import styled from 'styled-components';
import {
  ButtonList,
  ButtonListStateType,
} from '../../../ducks/buttonList/types';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { StateType } from '../../../redux/types';

const ButtonStyled = styled.button<PropsStyled>`
  ${(props: any) => props.propsstyle}
`;

type Props = {
  buttonsList: ButtonList[];
  actionGetList: () => void;
};

type PropsStyled = ButtonList;

const ButtonsDoneBlock: React.FC<Props> = ({ buttonsList, actionGetList }) => {
  useEffect(() => {
    actionGetList();
  }, []);

  return (
    <div className="firstblock">
      <ul>
        {!buttonsList && <h2>No content...</h2>}
        {buttonsList &&
          buttonsList.map((item: ButtonList | any) => (
            <li key={item.id}>
              <ButtonStyled propsstyle={item}>Example</ButtonStyled>
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: StateType) => ({
  buttonsList: buttonsListSelector(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<ButtonListStateType, void, Action>
) => ({
  actionGetList: () => {
    dispatch(getButtonsAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsDoneBlock);
