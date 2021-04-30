import axios from 'axios';

const apiVersion = '/api/v1';

const logginUserRequest = async (user, setToken, history, credentials, setCredentials, url) => {
  try {
    const response = await axios.post(
      url,
      user,
      { withCredentials: true },
    );
    if (response.data) {
      setToken(document.cookie);
      console.log(document.cookie, 'login');
      history.push('/');
    } else {
      setCredentials({ ...credentials, errors: response.data.errors });
    }
  } catch (err) {
    // Handle Error Here
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

export {
  logginUserRequest, apiVersion,
};
