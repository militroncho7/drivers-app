import React from 'react';
import {Link} from 'react-router-dom';

const Logout = ({type}) => (
  <Link onSubmit={type}>
    <img
      src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1587405138/drivers/logo/User-Interface-Logout-icon_her3mt.png"
      width="30px"
    />
  </Link>
);

export default Logout;
