import React, { Component } from "react";
import NavBar from "../bootstrap/NavBar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/login-avatar.png";
import navData from "../../data/navItems.json"
import styles from "./Layout.scss";

export default class Layout extends Component {

    state = {
        isHovered: false,
    }

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
            let link = (
                <NavLink 
                    className={"nav-link " + styles.NavLink}
                    to={item.href} 
                    title={item.title}
                    exact
                >
                    
                    <i className={item.icon}></i>
                    <span className={styles.NavLinkTxt}>{item.title}</span>
                </NavLink>
            );

            if (item.href.indexOf('http') > -1) {
                link = (
                    <a 
                        className={"nav-link " + styles.NavLink}
                        href={item.href}
                        title={item.title}
                    >
                        <i className={item.icon}></i>
                        <span className={styles.NavLinkTxt}>{item.title}</span>
                    </a>
                );
            }

            return (
                <li key={i} className={"nav-item " + styles.NavItem}>
                    { link }
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
                    { this.props.children }
                </main>
            </div>
        );
    }
}