import { useState } from 'react';
import { InputForm } from '../InputForm';
import { RulesDisplay } from './RulesDisplay';
import { RulesList } from './RulesList';

export const RulesBlock = () => {
  const [isInputOpened, setInputOpened] = useState(false);

  const addRuleHandler = () => {
    setInputOpened(true);
  };

  const closeInputHandler = () => {
    setInputOpened(false);
  };

  const [inputData, setInputData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const a = e.target.elements.stylename.value;
    const b = e.target.elements.stylevalue.value;

    setInputData([...inputData, { stylename: a, stylevalue: b }]);
  };

  return (
    <div className="secondblock">
      <div className="rulesdisplay">
        <RulesDisplay data={inputData} />
      </div>
      <div className="rules">
        <RulesList data={inputData} deletetest={setInputData} />
        <button onClick={addRuleHandler}>Add rule</button>
        <button>Submit</button>
      </div>
      {isInputOpened && (
        <form onSubmit={handleSubmit}>
          <button onClick={closeInputHandler}>x</button>
          <input placeholder="style name" name="stylename" />
          <label> : </label>
          <input placeholder="style value" name="stylevalue" />
          <button>Add style</button>
        </form>
      )}
    </div>
  );
};
