import React from 'react';

import ElemDisplayBlock from '../../components/ButtonPage/ElemDisplayBlock/ElemDisplayBlock';
import { RefreshButton } from '../../components/ButtonPage/RefreshButton/RefreshButton';
import { PageStatus } from '../../components/ButtonPage/PageStatus/PageStatus';
import RulesBlock from '../../components/ButtonPage/RulesBlock/RulesBlock';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 50%;
min-height: 500px;
margin auto;


`;

const ButtonPage: React.FC = () => {
  return (
    <StyledDiv>
      <ElemDisplayBlock />
      <RefreshButton />
      <PageStatus />
      <RulesBlock />
    </StyledDiv>
  );
};

export default ButtonPage;
