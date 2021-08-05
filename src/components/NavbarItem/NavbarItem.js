import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import styles from './NavbarItem.Styles.css'

const NavbarItem = ({title, url}) => {
    return ( 
        <Router>
            <Link to={url} className={styles.navbarItem}>{title}</Link>
        </Router>
        );
}

export default  NavbarItem;