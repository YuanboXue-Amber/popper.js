import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../images/logo.svg';

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      background: 'linear-gradient(45deg, #fafbfc, #e9f3fc)',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <img
        style={{ height: 200 }}
        src={Logo}
        draggable="false"
        alt="Tippy Logo"
      />
      <h1 style={{ margin: 0, color: `#b94653` }}>Positioning Engine</h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
