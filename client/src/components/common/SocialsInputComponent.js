import React from 'react';
import classnames from 'classnames';

const SocialsInput = ({
    icon_class,
    placeholder = '', 
    name, 
    value,
    onChange = 'this.changeValueOfInput',
    error
}) => (
    <div class={classnames('input-group mb-3', {'is-invalid': error})}>
                <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class={`fab ${icon_class}`}></i>
                    </span>
                </div>
                <input type="text" class="form-control form-control-lg" placeholder={placeholder} name={name} value={value} onChange={onChange}/>
                
                {error && <div class='invalid-feedback'>{error}</div>}
    </div>
);

export default SocialsInput;