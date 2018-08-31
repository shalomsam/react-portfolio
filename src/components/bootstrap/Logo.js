import React from "react";
import classes from "./Logo.scss";

const logo = (props) => {

    const text = props.text || props.title;
    const imgSrc = props.imgSrc || props.src;
    let imgTag = "";
    const navBrandClasses = "navbar-brand " + (props.className || "");

    if (imgSrc !== "" && imgSrc !== undefined) {
        imgTag = <img className={classes.Logo} src={imgSrc} alt="logo" />
    }
    
    return (
        <a className={navBrandClasses} href="/">
            {imgTag}
            {text}
        </a>
    );
}


export default logo;