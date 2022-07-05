import React from "react";
function FormInput(props) {
    return (
        <React.Fragment>
            <div className="form__group field">
                <input
                    type={props.type}
                    className="form__field"
                    placeholder={props.label}
                    onChange={props.handleChange}
                />
                <label  className="form__label">{props.label}</label>
            </div>
        </React.Fragment>
    )
}

export default FormInput
