import { useSelector } from 'react-redux';
import {
  errorSelector,
  isLoadingSelector,
} from '../../../ducks/buttonList/selectors';

export const PageStatus = () => {
  const error = useSelector(errorSelector);
  const isLoading = useSelector(isLoadingSelector);

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading in process...</p>}
    </div>
  );
};
