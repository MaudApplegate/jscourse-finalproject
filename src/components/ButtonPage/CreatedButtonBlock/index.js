import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getButtonsAction } from '../../../ducks/buttonList/actions';
import { buttonsListSelector } from '../../../ducks/buttonList/selectors';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  ${(props) => props.propsstyle}
`;

const CreatedButtonBlock = ({ actionGetData, buttonsData }) => {
  useEffect(() => {
    actionGetData();
  }, []);

  return (
    <div className="firstblock">
      <ul>
        {buttonsData.length === 0 && <h2>No content...</h2>}
        {buttonsData.map((item) => (
          <li key={item.id}>
            {' '}
            {console.log(item)}
            <ButtonStyled propsstyle={item}>Example</ButtonStyled>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  buttonsData: buttonsListSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionGetData: () => {
    dispatch(getButtonsAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatedButtonBlock);
