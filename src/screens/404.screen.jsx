import React from 'react';
import {Link} from 'react-router-dom';


const NotFoundScreen = () => (
  <div className='full-page center-hv home-screen'>
    <Link to='/'>
      err:404 go home
    </Link>
  </div>
);

export default NotFoundScreen;
