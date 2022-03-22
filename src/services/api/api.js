import createInstance from '../instance';
import { buttonList } from '../utils/utils';

const API = createInstance();

export const getButtons = async () => {
  const response = await API.get('/buttons');
  return buttonList(response);
};

export const pushButton = async (data) => {
  await API.post('/buttons', data);
};
