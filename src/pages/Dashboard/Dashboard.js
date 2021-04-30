/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { TokenContext } from '../../contexts/TokenProvider';
import { UserContext } from '../../contexts/UserProvider';
import AuthParser from '../../algorithms/auth';
import { apiVersion } from '../../api/apiCalls';

const Dashboard = () => {
  const [token, setToken] = useContext(TokenContext);
  const [user, setUser] = useContext(UserContext);
  const [parsedToken, setParsedToken] = useState('');

  useEffect(async () => {
    console.log(token, parsedToken);
    await setParsedToken(AuthParser(token).cookieTojson().Token);
    const headers = await {
      'Content-Type': 'application/json',
      'auth-token': parsedToken,
    };
    const url = await AuthParser(parsedToken || '').parseJwt()._id;
    const result = await axios.get(
      `${apiVersion}/users/${url}`,
      { headers },
    );
    setUser(await result.data);
  }, [parsedToken]);
  return (
    <div className="Dashboard">
      Hey this is the dashboard
      {user.name}
    </div>
  );
};

export default Dashboard;
