/* eslint-disable no-param-reassign */
const AuthParser = (cookie) => {
  const token = cookie;
  console.log(cookie, 'cookie');
  return {
    cookieTojson() {
      return token.split('; ').reduce((prev, current) => {
        const [name, ...value] = current.split('=');
        prev[name] = value.join('=');
        return prev;
      }, {});
    },
    parseJwt() {
      if (token !== '') {
        console.log(token, 'filled');
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
        return JSON.parse(jsonPayload);
      }
      return '';
    },
  };
};

export default AuthParser;
