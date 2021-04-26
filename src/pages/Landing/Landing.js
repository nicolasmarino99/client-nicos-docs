import React from 'react';
import { Redirect } from 'react-router';
import { UserContext } from '../../contexts/UserProvider';

const LandingPage = () => {
    const [user, setUser] = useContext(UserContext);

    if (user) Redirect


    return (
        <div className="LandingPage">

        </div>
    );
}

export default LandingPage;
