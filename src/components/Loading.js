import React from 'react';

import Spinner from '../images/loading.gif';

//STYLES
import '../styles/Loading.css';

const Loading = () => {
  return (
    <div className="spinner">
      <img src={Spinner} alt="" className="spinner__image" />
    </div>
  );
};

export default Loading;
