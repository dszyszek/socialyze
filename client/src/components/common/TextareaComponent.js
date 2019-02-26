import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextareaComponent = ({
    name,
    placeholder,
    error,
    info,
    value,
    onChange,
    ...rest
}) => {
    return (
        <div class="form-group">

            <textarea class={classnames('form-control',
            {
                'is-invalid': error
            })}
                name={name} placeholder={placeholder} value={value} onChange={onChange} {...rest}/>
            
                {info && <small class='form-text text-muted'>{info}</small>}
                {error && <div class='invalid-feedback'>{error}</div>}
        
        </div>
    );
};

TextareaComponent.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    info: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default TextareaComponent;