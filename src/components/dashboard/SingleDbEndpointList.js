import React from 'react';
import PropTypes from 'prop-types';
import EndpointLink from './EndpointLink';
import { EndpointLi } from '../../styles';

export default function SingleDbEndpointList({ username, dbName, dbMdls }) {
  const endpoints = dbMdls.map(mdl => {
    return <EndpointLi key={mdl._id}>
      <EndpointLink username={username} dbName={dbName} mdlName={mdl.mdlName} />
    </EndpointLi>;
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
