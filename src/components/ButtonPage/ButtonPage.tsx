import React from 'react';
import './indextest.css';

import ButtonsDoneBlock from './ButtonsDoneBlock/ButtonsDoneBlock';
import RulesBlock from './RulesBlock/RulesBlock';

const ButtonPage: React.FC = () => {
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
