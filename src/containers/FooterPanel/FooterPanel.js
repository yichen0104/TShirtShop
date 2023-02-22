import './FooterPanel.css';
import React from 'react';
import {Link } from 'react-router-dom';
import appRoutes from '../../shared/appRoutes';

const FooterPanel = () => {
    return(
        <footer>
            <div className="footer-navbar">
            <Link to={appRoutes.notImplemented}>Contact</Link>
            <Link to={appRoutes.notImplemented}>Site Map</Link>
            <Link to={appRoutes.notImplemented}>Privacy Policy</Link>
            <Link to={appRoutes.notImplemented}>Careers</Link>
            <Link to={appRoutes.notImplemented}>Reviews</Link>
            </div>
        </footer>
    );
}

export default FooterPanel;