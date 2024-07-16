import React from 'react'

export default function Alerts(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{ height: "45px" }}>
            {props.alert && <div className={`${props.mode === "light" ? "border border-dark" : "border border-light"} rounded alert alert-${props.alert.type} alert-dismissible fade show container text-center bg-info`} role="alert">
                <strong>{capitalize(props.alert.type)}: {props.alert.msg}</strong>
            </div>}
        </div>
    )
}
