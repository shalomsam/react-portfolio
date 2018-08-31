import React, { Component } from "react";
import PropTypes from "prop-types";

class Container extends Component {
    render() {
        
        let fluid = "";
        let bClass = "container";
        
        if (props.fluid) {
            fluid = "-fluid";
        }

        bClass = bClass + fluid;
        return (
            <div className={bClass}>
                {this.props.children}
            </div>
        ); 
    }
}

Container.propTypes = {
    fluid: PropTypes.bool
}


export default Container;