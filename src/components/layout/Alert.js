import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
//racf

const Alert = () => {
  const alerContext = useContext(AlertContext);
  const { alert } = alerContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>)
  )
}

export default Alert
