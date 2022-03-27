import React, { useEffect } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import { getButtonsAction } from '../../../ducks/buttonList/actions';
import { buttonsListSelector } from '../../../ducks/buttonList/selectors';

import { ButtonListType } from '../../../ducks/buttonList/types';
import { StateType } from '../../../redux/types';

import { DeleteButton } from './DeleteButton';
import { ButtonDownLoad } from './Button';

type Props = {
  buttonsList: ButtonListType[];
  actionGetList: () => void;
};

const ButtonsDoneBlock: React.FC<Props> = ({ buttonsList, actionGetList }) => {
  useEffect(() => {
    actionGetList();
  }, []);

  return (
    <div className="firstblock">
      <ul>
        {!buttonsList && <h2>No content...</h2>}
        {buttonsList &&
          buttonsList.map((item: ButtonListType) => (
            <li key={item.id}>
              <ButtonDownLoad id={item.id} propsstyle={item} />
              <DeleteButton id={item.id} />
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
  dispatch: ThunkDispatch<StateType, void, AnyAction>
) => ({
  actionGetList: () => {
    dispatch(getButtonsAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsDoneBlock);
