import { useId } from 'react-id-generator';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { buttonsListSelector } from '../../../ducks/buttonList/selectors';

import { ButtonList } from '../../../ducks/buttonList/types';
import {
  ACTION_CLEAR_RULE_FIELD,
  ACTION_SET_ID_FROM_SERVER,
  ACTION_SET_RULE,
  SET_ID_FROM_SERVER,
} from '../../../ducks/buttonRules/actions';

// type PropsStyled = { propsstyle: ButtonList };

const ButtonStyled = styled.button`
  ${(props) => props.propsstyle}
`;

// type Props = {
//   id: string;
//   propsstyle: ButtonList;
// };

export const ButtonDownLoad = ({ id, propsstyle }) => {
  const ButtonListData = useSelector(buttonsListSelector);
  const dispatch = useDispatch();

  let nextId = 0;

  const buttonChangeHandler = () => {
    dispatch(ACTION_CLEAR_RULE_FIELD());
    const elem = ButtonListData.find((el) => el.id === id);
    dispatch(ACTION_SET_ID_FROM_SERVER(id));
    Object.entries(elem).forEach(([key, value]) => {
      if (key !== 'id' && key !== 'name') {
        dispatch(
          ACTION_SET_RULE({ id: nextId++, stylename: key, stylevalue: value })
        );
      }
    });
  };

  return (
    <ButtonStyled propsstyle={propsstyle} onClick={buttonChangeHandler}>
      Example
    </ButtonStyled>
  );
};
