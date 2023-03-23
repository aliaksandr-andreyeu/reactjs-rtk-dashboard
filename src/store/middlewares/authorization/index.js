import { setInterceptors } from '@helpers';

const authorization = (store) => (next) => (action) => {
  setInterceptors(store);

  return next(action);
};

export default authorization;
