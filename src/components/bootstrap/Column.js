import React from "react";
import Aux from "../../hoc/Aux"


const column = (props) => {

    let bClass = "col";
    if ( props.class ) {
        bClass = props.class;
    } else {
        bClass = "";
        if ( props.xs ) {
            bClass += "col-xs" + props.xs !== "" ?  "-" + props.xs + " " : " ";
        }
        if ( props.sm ) {
            bClass += "col-sm" + props.sm !== "" ? "-" + props.sm + " " : " ";
        } 
        if ( props.md ) {
            bClass += "col-md" + props.md !== "" ? "-" + props.md + " " : " ";
        }
        if ( props.lg ) {
            bClass += "col-sm" + props.lg !== "" ? "-" + props.lg + " " : " ";
        }
    }

    return (
        <Aux>
            <div className={bClass}>
                {props.children}
            </div>
        </Aux>
    );
}

export default column;
