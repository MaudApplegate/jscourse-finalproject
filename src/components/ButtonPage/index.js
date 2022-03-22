import CreatedButtonBlock from './CreatedButtonBlock/index';
import './indextest.css';
import { RulesBlock } from './RulesBlock';

const ButtonPage = () => {
  return (
    <div>
      <CreatedButtonBlock />
      <button className="btndop">restart</button>
      <button className="btndop">wait...</button>
      <RulesBlock />
    </div>
  );
};

export default ButtonPage;
