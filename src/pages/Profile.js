import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export  function Profile() {

  const [token, setToken] = useState();

  if(!token) {
    document.location.href="/";
    //return <Profile setToken={setToken} />
  }

  return(
    <h2>Profile</h2>
  );
}
