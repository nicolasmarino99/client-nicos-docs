/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { base } from '../../../../server-nicos-docs/src/api/models/User';
import parseJwt from '../../algorithms/auth';
import { TokenContext } from '../../contexts/TokenProvider';
import { UserContext } from '../../contexts/UserProvider';

const Dashboard = () => {
  const [token, setToken] = useContext(TokenContext);
  const [user, setUser] = useContext(UserContext);

  useEffect(async () => {
    const headers = {
      'Content-Type': 'application/json',
      'auth-token': token,
    };
    const result = await axios.get(
      `${base}/users/${parseJwt(token)._id}`,
      { headers },
    );

    setUser(result.data);
  });
  return (
    <div className="Dashboard">
      Hey this is the dashboard
      {user.name}
    </div>
  );
};

export default Dashboard;
