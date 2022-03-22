import axios from 'axios';
import { defaultConfig } from './dafaultConfig';

const createInstance = (config = {}) => {
  const newConfig = {
    ...defaultConfig,
    ...config,
  };

  const instance = axios.create(newConfig);
  return instance;
};

export default createInstance;
