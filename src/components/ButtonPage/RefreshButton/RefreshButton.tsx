import { useDispatch } from 'react-redux';
import { ACTION_CLEAR_RULE_FIELD } from '../../../ducks/buttonRules/actions';

export const RefreshButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ACTION_CLEAR_RULE_FIELD());
  };

  return (
    <div>
      <button className="btndop" onClick={handleClick}>
        Refresh
      </button>
    </div>
  );
};
