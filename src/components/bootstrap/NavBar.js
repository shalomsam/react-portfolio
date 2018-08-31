import React, { Component } from "react";
import Logo from "./Logo";
import CustomLogo from "../CustomLogo/CustomLogo"
import NavItem from "./NavItem";
import classes from "./NavBar.scss";

class NavBar extends Component {

    state = {
        collapseShow: false
    }

    collapseHandler = () => {
        const collapseShow = this.state.collapseShow;
        this.setState({
            collapseShow: !collapseShow
        });
    }

    getLogo = () => {
        let logo = <Logo />;
        let logoOpts = { className: classes['navbar-brand'] };

        if (this.props.logoText) {
            logoOpts['text'] = this.props.logoText;
        } 
        if (this.props.logoSrc) {
            logoOpts['imgSrc'] = this.props.logoSrc;
        }
        logo = <Logo {...logoOpts} />;

        return logo;
    }

    getClasses = () => {
        let navClass = "navbar " + (this.props.className || "") + classes.NavBar;
        let sideBarDevice = this.props.sidebar && (typeof this.props.sidebar) !== "boolean" ? this.props.sidebar : "md";
        let navBarListClass = "navbar-nav mr-auto";
        let navBarToggle = "navbar-toggler " + classes['navbar-toggler'];


        const navSideBarListClass = "flex-" +
                                    sideBarDevice +
                                    "-column flex-row navbar-nav w-100";

        const navSideBarClass = " sidebar flex-" +
                                sideBarDevice +
                                "-column flex-row align-items-start " +
                                (this.props.className || "");

        // navbar as sidebar
        if (this.props.sidebar !== undefined) {
            navBarListClass = navSideBarListClass;
            navClass += navSideBarClass + " " + classes.sidebar;
        }

        // Check nav theme color (dark/light)
        if (this.props.dark) {
            navClass += " navbar-dark bg-dark";
        } else {
            navClass += " navbar-light bg-light";
        }

        // Navbar class (with collapse)
        let collapseClass = "navbar-collapse collapse " + classes['navbar-collapse'];
        if (this.state.collapseShow) {
            collapseClass += " show";
        }

        return {
            navClass: navClass,
            collapseClass: collapseClass,
            navBarListClass: navBarListClass,
            navBarToggle: navBarToggle
        }
    }

    getItems = () => {
        // NavItems 
        let navItems = null;
        if (this.props.navItems !== undefined && this.props.navItems.length > 0) {
            navItems = this.props.navItems.map((ni) => {

                let opts = {};
                
                if ( ni.hasOwnProperty('dropdown') &&
                    Array.isArray(ni.dropdown) )
                {
                    if (this.props.sidebar) {
                        console.warn("Dropdown in a sidebar isn't aesthetic!")
                    }
                    opts['dropdown'] = ni.dropdown;
                } else if (ni.hasOwnProperty('href')) {
                    opts['href'] = ni.href;
                }
                if (ni.hasOwnProperty('title')) {
                    opts['title'] = ni.title;
                }
                
                return (
                    <NavItem {...opts} />
                );
            })
        }

        return navItems;
    }

    render() {

        // const logo = this.getLogo();
        const defaultClasses = this.getClasses();
        const navItems = this.getItems();
        

        return (
            <nav className={defaultClasses['navClass']}>
                {/* {logo} */}
                <CustomLogo />

                <button onClick={this.collapseHandler} 
                        className={defaultClasses['navBarToggle']} 
                        type="button" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={defaultClasses['collapseClass']}>
                    <ul className={defaultClasses['navBarListClass']}>
                        { this.props.children || navItems }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
