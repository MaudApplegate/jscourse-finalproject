import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  errorSelector,
  isLoadingSelector,
} from '../../../ducks/buttonList/selectors';

const StyledDiv = styled.div`
  position: absolute;
  top: 30%;
  left: 77%;

  p {
    font-weight: bold;
    margin: 20px 10px;
    color: #9462a8;
  }

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #9462a8 transparent #9462a8 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const PageStatus = () => {
  const error = useSelector(errorSelector);
  const isLoading = useSelector(isLoadingSelector);

  return (
    <StyledDiv>
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
    </StyledDiv>
  );
};

const Loader = () => {
  return (
    <>
      <div className="lds-dual-ring"></div>
      <p>LOADING...</p>
    </>
  );
};
