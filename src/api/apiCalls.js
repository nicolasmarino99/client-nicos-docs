import axios from 'axios';

const base = 'http://localhost:5000/api/v1';

const postElement = async (element, type, url, dispatch) => {
  try {
    const response = await axios.post(
      url,
      element,
      { withCredentials: true },
    );
    dispatch({
      type,
      payload: [response.data],
    });
  } catch (err) {
    console.error(err);
  }
};

const getElements = async (type, url, dispatch) => {
  try {
    const response = await axios.get(
      url,
      { withCredentials: true },
    );
    dispatch({
      type,
      payload: response.data,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

const deleteElement = async (type, url, dispatch, id) => {
  try {
    const response = await axios.delete(
      url,
      { withCredentials: true },
    );
    dispatch({
      type,
      payload: id,
    });
  } catch (err) {
    console.error(err);
  }
};

const updateElement = async (element, type, url, dispatch, id) => {
  try {
    const response = await axios.put(
      url,
      element,
      { withCredentials: true },
    );
    dispatch({
      type,
      payload: { data: [response.data], id },
    });
  } catch (err) {
    console.error(err);
  }
};

const logginUserRequest = async (user, setUser, history, credentials, setCredentials, url) => {
  try {
    const response = await axios.post(
      url,
      { user },
      { withCredentials: true });
    if (response.data.logged_in) {
      setUser(response.data);
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
  postElement, getElements, deleteElement, updateElement, logginUserRequest, base,
};
