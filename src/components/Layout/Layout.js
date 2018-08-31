import React, { Component } from "react";
import NavBar from "../bootstrap/NavBar";
import Canvas from "../Canvas/Canvas";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/login-avatar.png";
import navData from "../../data/navItems.json"
import styles from "./Layout.scss";


export default class Layout extends Component {

    render() {  
        let navItems;
        let navBarOpts = {
            logoSrc: logo
        };
        let sidebarDevice = "md";
        let appClasses = "App " + styles.Layout;

        if (this.props.sidebar) {
            navBarOpts['sidebar'] = this.props.sidebar;
            sidebarDevice = (typeof this.props.sidebar !== "boolean") ? this.props.sidebar : "md";
            appClasses += " " + sidebarDevice;
        }

        if (this.props.dark) {
            navBarOpts['dark'] = true;
        }

        navItems = navData.map((item, i) => {
            return (
                <li key={i} className="nav-item">
                    <NavLink 
                        className="nav-link" 
                        to={item.href} 
                        title={item.title}
                    >
                        
                        <i className={item.icon}></i>
                    </NavLink>
                </li>
            );
        })

        
        return (
            <div className={appClasses}>
                <div className={styles.SidebarWrp}>
                    <NavBar {...navBarOpts} >
                        {navItems}
                    </NavBar>
                </div>
                <main className={styles.Page} >
                    {/* <Canvas className={styles.Canvas} />
                    <div className={styles.ContentWrp}> */}
                        { this.props.children }
                    {/* </div> */}
                </main>
            </div>
        );
    }
}