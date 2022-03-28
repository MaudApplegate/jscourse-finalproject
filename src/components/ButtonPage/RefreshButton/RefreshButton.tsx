import { useDispatch } from 'react-redux';
import { ACTION_CLEAR_RULE_FIELD } from '../../../ducks/buttonRules/actions';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  top: 60%;
  left: 77%;

  button {
    height: 30px;
    border-radius: 10px;
    font-size: 18px;
    background: #9462a8;
    color: white;
    cursor: pointer;
    margin: auto 10px;

    &:hover {
      background: #73567e;
    }
  }
`;

export const RefreshButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ACTION_CLEAR_RULE_FIELD());
  };

  return (
    <StyledDiv>
      <button className="btndop" onClick={handleClick}>
        Refresh
      </button>
    </StyledDiv>
  );
};
