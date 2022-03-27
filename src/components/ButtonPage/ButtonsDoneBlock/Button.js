import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { buttonsListSelector } from '../../../ducks/buttonList/selectors';
import {
  ACTION_CLEAR_RULE_FIELD,
  ACTION_PATCH_RULES,
} from '../../../ducks/buttonRules/actions';

const ButtonStyled = styled.button`
  ${(props) => props.propsstyle}
`;

export const ButtonDownLoad = ({ id, propsstyle }) => {
  const ButtonListData = useSelector(buttonsListSelector);
  const dispatch = useDispatch();

  const buttonChangeHandler = () => {
    dispatch(ACTION_CLEAR_RULE_FIELD());
    const elem = ButtonListData.find((el) => el.id === id);
    dispatch(ACTION_PATCH_RULES(elem));
  };

  return (
    <ButtonStyled propsstyle={propsstyle} onClick={buttonChangeHandler}>
      Example
    </ButtonStyled>
  );
};
