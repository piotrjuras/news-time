import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, label, children, ...props }) => {

    return(

        <button className={type} {...props} >        
                {label}
                {children}
        </button>

    )


}

Button.defaultProps = {
    type: "button_main",
}

Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.any
}


export default Button;