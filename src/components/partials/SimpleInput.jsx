import React from 'react';
import PropTypes from 'prop-types';

class SimpleInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.getHandler('handleInput').bind(this);
        this.handleChange = this.getHandler('handleChange').bind(this);
    }

    getHandler(name) {
        return ({target}) => {
            const handler = this.props[name];

            if (handler) {
                handler(target, this.props.params);
            }
        };
    }

    render() {
        const {className, defaultChecked, defaultValue, placeholder, type} = this.props;
        return (<input className={className} type={type} onInput={this.handleInput} onChange={this.handleChange} defaultChecked={defaultChecked} defaultValue={defaultValue} placeholder={placeholder}/>);
    }
}

SimpleInput.defaultProps ={
    placeholder: ''
};

SimpleInput.propTypes = {
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    defaultValue: PropTypes.string,
    handleClick: PropTypes.func,
    params: PropTypes.object,
    placeholder: PropTypes.string,
    type: PropTypes.string
};

export default SimpleInput;
