import ButtonsDoneBlock from './ButtonsDoneBlock/ButtonsDoneBlock';
import './indextest.css';
import { RulesBlock } from './RulesBlock/RulesBlock';

const ButtonPage = () => {
  return (
    <div>
      <ButtonsDoneBlock />
      <button className="btndop">restart</button>
      <button className="btndop">wait...</button>
      <RulesBlock />
    </div>
  );
};

export default ButtonPage;
