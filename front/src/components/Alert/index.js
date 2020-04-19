import React from 'react';

import './style.css';

const Alert = ({children, type}) => <div className={`alert alert_${type}`}>{children}</div>;

export default Alert;
