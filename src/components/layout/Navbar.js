import React from 'react';
import PropTypes from 'prop-types';


const Navbar =({icon,title})=> {
    // default props
   

   
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}></i>
                     {title}
                     </h1>
            </nav>
        )

}
Navbar.defaultProps ={
    title:'Git Finder',
    icon:'fab fa-github'
};
//Check the props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon:   PropTypes.string.isRequired
};

export default Navbar
