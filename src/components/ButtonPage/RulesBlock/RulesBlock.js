// import { useState } from 'react';
import { useId } from 'react-id-generator';
import { connect, useDispatch, useSelector } from 'react-redux';
import { pushButtonAction } from '../../../ducks/buttonPush/actions';

import { ACTION_INPUT_ON } from '../../../ducks/buttonRules/actions';
import {
  isInputFormOpenedSelector,
  stylelistSelector,
} from '../../../ducks/buttonRules/selectors';
import { InputForm } from './InputRules';
import { RulesDisplay } from './RulesDisplay';
import { RulesList } from './RulesList';

const RulesBlock = ({ testState, actiontest }) => {
  const dispatch = useDispatch();
  const isInputOpened = useSelector(isInputFormOpenedSelector);

  const addRuleHandler = () => {
    dispatch(ACTION_INPUT_ON());
    // console.log(stylelist);
  };

  // const [buttonToPost, setButtonToPost] = useState({ id: '', name: 'Button' });

  const [nextId] = useId();

  // const stylelist = useSelector(stylelistSelector);

  const submitBtnHandler = () => {
    const style = {};

    testState.map((i) => {
      style.id = nextId;
      style.name = 'Example';
      style[i.stylename] = i.stylevalue;
    });
    console.log(style);

    actiontest(style);

    //  dispatch(pushButtonAction(style));

    // setButtonToPost({ ...buttonToPost, id: nextId });
    // console.log(buttonToPost);

    // stylelist.map((i) => {
    //   setButtonToPost({ ...buttonToPost, [i.stylename]: i.stylevalue });
    // });
    // console.log(buttonToPost);

    // stylelist.map((i) => {
    //   setButtonToPost({
    //     ...buttonToPost,
    //     id: nextId,
    //     [i.stylename]: i.stylevalue,
    //   });
    // });

    // dispatch(pushButtonAction(buttonToPost));
    // console.log(buttonToPost);
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

const mapStateToProps = (state) => ({
  testState: stylelistSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actiontest: (data) => {
    dispatch(pushButtonAction(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RulesBlock);
