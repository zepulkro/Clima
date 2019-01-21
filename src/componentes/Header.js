import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div>
            <header>
                <nav className="nav-wrapper light-blue darken-2">
                    <a className="brand-logo">{props.titulo}</a>
                </nav>
            </header>
        </div>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;