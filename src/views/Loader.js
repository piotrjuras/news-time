import React, {useEffect} from 'react';

import './Loader.css';

import PropTypes from 'prop-types';



const Loader = ({ time }) => {


    useEffect(() => {

        const timeCheck = setTimeout(() => {
            window.location.pathname = "";
        }, time);
        
        return () => {
            clearTimeout(timeCheck)
        }

    },[time])


    return (
        <div className="loading_screen">
            <div className = "dot"></div>
            <div className = "bar"></div>
        </div>
    )


};

Loader.defaultProps = {
    time: 10000000
}

Loader.propTypes = {
    time: PropTypes.number
}

export default Loader;