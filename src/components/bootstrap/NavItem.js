import React, { Component } from "react";

class NavItem extends Component {

    state = {
        dropdownShow: false
    }

    toggleDropdown = () => {
        const ddShow = this.state.dropdownShow;
        this.setState({
            dropdownShow: !ddShow
        })
    }

    render() {
        
        let dropdown;
        let navItemClass = "nav-item";
        let dropdownMenuClass = "dropdown-menu";

        let linkOpts = {
            className: "nav-link",
            href: "#"
        };

        if (this.props.dropdown !== undefined && this.props.dropdown.length > 0) {

            navItemClass += " dropdown";
            linkOpts['className'] += " dropdown-toggle";
            linkOpts['onClick'] = this.toggleDropdown;

            const dropdownItems = this.props.dropdown.map((dropdownItem, i) => {
                return (
                    <a key={"dd"+i} className="dropdown-item" href={dropdownItem.href}>
                        {dropdownItem.text || dropdownItem.title}
                    </a>
                );
            });

            if (this.state.dropdownShow) {
                dropdownMenuClass += " show";   
                navItemClass += " show";
            }

            dropdown = (
                <div className={dropdownMenuClass} aria-labelledby="navbarDropdown">
                    {dropdownItems}
                </div>
            );
        }

        const link = <a {...linkOpts}>{this.props.title}</a>

        return (
            <li className={navItemClass}>
                {link}
                {this.props.children || dropdown}
            </li>
        );
    }
}

export default NavItem;