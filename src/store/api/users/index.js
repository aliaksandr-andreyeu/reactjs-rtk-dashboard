import { requests } from '@constants';

try {
  console.log('REACT_ENV.API_URL', REACT_ENV.API_URL);
} catch (error) {
  console.log('error', error.message);
}

const users = Object.create(Object.prototype, {
  getUsers: {
    value: async () => {
      try {
        const response = await requests.get(`${REACT_ENV.API_URL}/users`);
        console.log('----- API Users getUsers url, response: ', `${REACT_ENV.API_URL}/users`, response);
        return response;
      } catch (error) {
        console.log('----- API Users getUsers error:', error.message);
        throw error;
      }
    }
  }
});

console.log('users', users);

export default users;
