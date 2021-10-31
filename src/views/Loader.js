import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './Loader.css';



const Loader = ({ time }) => {


    useEffect(() => {

        const timeCheck = setTimeout(() => {
            window.location.reload();
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
    time: 15000,
}

Loader.propTypes = {
    time: PropTypes.number
}

export default Loader;