import React, { useEffect } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import { getButtonsAction } from '../../../ducks/buttonList/actions';
import { buttonsListSelector } from '../../../ducks/buttonList/selectors';

import { ButtonListType } from '../../../ducks/buttonList/types';
import { StateType } from '../../../redux/types';

import { DeleteElem } from './DeleteElem';
import { SingleElem } from './SingleElem/SingleElem';

import styled from 'styled-components';

type Props = {
  buttonsList: ButtonListType[];
  actionGetList: () => void;
};

const StyledDiv = styled.div`

width: 100%;
min-height: 300px;
margin auto;
border: solid 6px #352371;
border-radius: 20px;
background: white;
box-sizing: border-box;
text-align: center;

li {
  list-style: none;
  margin: 15px auto;
  display: inline-grid;
  grid-template-columns: 400px 32px;
  justify-items: center;
}
`;

const ElemDisplayBlock: React.FC<Props> = ({ buttonsList, actionGetList }) => {
  useEffect(() => {
    actionGetList();
  }, []);

  return (
    <StyledDiv className="firstblock">
      <ul>
        {!buttonsList && <h2>No content...</h2>}
        {buttonsList &&
          buttonsList.map((item: ButtonListType) => (
            <li key={item.id}>
              <SingleElem id={item.id} propsstyle={item} />
              <DeleteElem id={item.id} />
            </li>
          ))}
      </ul>
    </StyledDiv>
  );
};

const mapStateToProps = (state: StateType) => ({
  buttonsList: buttonsListSelector(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StateType, void, AnyAction>
) => ({
  actionGetList: () => {
    dispatch(getButtonsAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ElemDisplayBlock);
