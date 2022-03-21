import { CreatedListBlock } from './CreatedButtonListBlock';
import './indextest.css';
import { RulesBlock } from './RulesBlock';

const ButtonPage = () => {
  return (
    <div>
      <CreatedListBlock />
      <button className="btndop">restart</button>
      <button className="btndop">wait...</button>
      <RulesBlock />
    </div>
  );
};

export default ButtonPage;
