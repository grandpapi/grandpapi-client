import React from 'react';
import PropTypes from 'prop-types';

export default function EndpointLink({ username, mdlName, dbName }) {
  const endpoint = `${process.env.API_URL}/api/${username}/${dbName}/${mdlName}`;
  return (
    <li>
      <p>
        {`${mdlName}: `}
        <a href={`${endpoint}`} target='_blank' rel='noopener noreferrer'>{endpoint}</a>
      </p>
    </li>
  );
}

EndpointLink.propTypes = {
  username: PropTypes.string.isRequired,
  mdlName: PropTypes.string.isRequired,
  dbName: PropTypes.string.isRequired  
};
