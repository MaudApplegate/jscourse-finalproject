import React from 'react';
import './indextest.css';

import ElemDisplayBlock from '../../components/ButtonPage/ElemDisplayBlock/ElemDisplayBlock';
import { RefreshButton } from '../../components/RefreshButton/RefreshButton';
import { PageStatus } from '../../components/ButtonPage/PageStatus/PageStatus';
import RulesBlock from '../../components/ButtonPage/RulesBlock/RulesBlock';

const ButtonPage: React.FC = () => {
  return (
    <div>
      <ElemDisplayBlock />
      <RefreshButton />
      <PageStatus />
      <RulesBlock />
    </div>
  );
};

export default ButtonPage;
