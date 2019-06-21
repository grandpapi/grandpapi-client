import React from 'react';
import PropTypes from 'prop-types';
import EndpointLink from './EndpointLink';

export default function SingleDbEndpointList({ username, dbName, dbMdls }) {
  const endpoints = dbMdls.map(mdl => {
    return <li key={mdl._id}>
      <EndpointLink username={username} dbName={dbName} mdlName={mdl.mdlName} />
    </li>;
  });
  return (
    <>
    <h3>All Live Endpoints</h3>
    <ul>
      {endpoints}
    </ul>
    </>
  );
}

SingleDbEndpointList.propTypes = {
  username: PropTypes.string.isRequired,
  dbMdls: PropTypes.array,
  dbName: PropTypes.string.isRequired  
};
