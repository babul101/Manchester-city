import React from 'react';

import { CityLogo } from './../ui/icons';

const Footer = () => {
    return (
        <footer className='bck_blue'>
            <div className='footer_logo'>
                <CityLogo width='70px' height='70px' linkTo='/' link={true}/>
            </div>
            <div className='footer_discl'>
                Manchester City &copy;{new Date().getFullYear()}.All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;