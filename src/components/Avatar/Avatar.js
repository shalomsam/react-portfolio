import React, { Component } from "react";
import myAvatar from "../../assets/images/myAvatar.svg";
import styles from "./Avatar.scss";

export default class Avatar extends Component {
    render() {
        return (
            <div className={styles.Avatar}>
                <div className={styles.backdrop}></div>
                <div className={styles.clipMask}>
                    <img className={styles.img} src={myAvatar} alt="avatar" />
                </div>
            </div>
        );
    }
}