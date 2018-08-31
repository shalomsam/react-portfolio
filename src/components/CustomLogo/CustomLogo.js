import React from "react";
import styles from "./CustomLogo.scss";

const customLogo = (props) => {

    return (
        <a className={styles.CustomLogo} href={props.href} >
            <span className={styles.layer}>
                &lt;
            </span>
            <span className={styles.layer}>
                &gt;
            </span>
        </a>
    );
}

export default customLogo;