import React from 'react'
import loaderSrc from '../../assets/loading.gif';

const Loader = props => (
  <img
    style={{width: 30}}
    alt="Loader icon"
    src={loaderSrc} />
);

export default Loader;