import React from 'react';
import SVGIcon from './SVGIcon.js';

const Button = (props) => {
	let {btnType = 'default', color = 'primary', onClick, disabled, iconName, children, ...other} = props;
	return (
    <button onClick={onClick} className={`sdc-button sdc-button-${btnType} sdc-button__${color} ${iconName ? 'sdc-button__with-icon' : ''}`} disabled={disabled} {...other}>
      {iconName && <SVGIcon name={iconName} />}
      {children}
    </button>
	);
};

export default Button;
