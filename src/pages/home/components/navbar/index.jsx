
import React from "react";
import './style.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const NavbarComponent = (props) => {
    return (
        <div className="hor-row sticky-component navbar-container-main">
            <div className="app-content-container">
                <div className="logo-container-main">
                    <span className="logo-text">
                        CHAUDH
                        <span className="special-character">A </span>
                        RY
                    </span>
                </div>
                <div className="nav-link-container">
                    <div className="setting-container">
                        {props.currentMode === 'dark' ? <LightModeIcon className="icon-container"
                            onClick = {() => props.setMode('light')} />
                        : <DarkModeIcon className="icon-container"
                            onClick = {() => props.setMode('dark')} />
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}


export default NavbarComponent;