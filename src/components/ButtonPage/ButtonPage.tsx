import React from 'react';
import './indextest.css';

import ButtonsDoneBlock from './ElemDisplayBlock/ElemDisplayBlock';
import RulesBlock from './RulesBlock/RulesBlock';
import { RefreshButton } from '../RefreshButton/RefreshButton';
import { PageStatus } from './PageStatus/PageStatus';

const ButtonPage: React.FC = () => {
  return (
    <div>
      <ButtonsDoneBlock />
      <RefreshButton />
      <PageStatus />
      <RulesBlock />
    </div>
  );
};

export default ButtonPage;
