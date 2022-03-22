import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  ACTION_PUSH_BUTTON_SUCCEED,
  getButtonsAction,
  PUSH_BUTTON_SUCCEED,
} from '../../../ducks/buttonList/actions';
import { buttonsListSelector } from '../../../ducks/buttonList/selectors';
import styled from 'styled-components';
import { changeHandlerSelector } from '../../../ducks/buttonPush/selectors';

const ButtonStyled = styled.button`
  ${(props) => props.propsstyle}
`;

const ButtonsDoneBlock = ({ actionGetList, buttonsList }) => {
  const changehandler = useSelector((state) => state.buttonPush);

  useEffect(() => {
    actionGetList();
    console.log('haha');
  }, [changehandler]);

  return (
    <div className="firstblock">
      <ul>
        {buttonsList.length === 0 && <h2>No content...</h2>}
        {buttonsList.map((item) => (
          <li key={item.id}>
            <ButtonStyled propsstyle={item}>Example</ButtonStyled>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  buttonsList: buttonsListSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionGetList: () => {
    dispatch(getButtonsAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsDoneBlock);
