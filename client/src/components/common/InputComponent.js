import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputComponent = ({
    name,
    placeholder,
    error,
    info,
    type = 'text',
    value,
    label,
    aria_describe,
    onChange
}) => {
    return (
        <div class="form-group">

            <label for={label}>{label}</label>
            <input type={type} class={classnames('form-control',
            {
                'is-invalid': error
            })}
                aria-describedby={aria_describe} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
            
                {info && <small class='form-text text-muted'>{info}</small>}
                {error && <div class='invalid-feedback'>{error}</div>}
        
        </div>
    );
};

InputComponent.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    info: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    aria_describe: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default InputComponent;