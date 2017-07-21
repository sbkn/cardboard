import React from "react";
import PropTypes from "prop-types";
import RaisedButton from 'material-ui/RaisedButton';


const Button = (props) => (
	<RaisedButton label="Click me" onClick={props.onClick}/>
);

Button.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.string
};

export default Button;
