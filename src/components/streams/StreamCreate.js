import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from  '../../actions';

class StreamCreate extends React.Component {
    renderError = meta => {
        if (meta.error && meta.touched){
            return (
                <div className='ui error message'>
                    <div className='header'>{meta.error}</div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : '' }`
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete='off' />  
                <div>{this.renderError(formProps.meta)}</div>  
            </div>
        )
    }

    //doesnt need e.preventDefault() with redux-form
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }


    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>{/* needs className error in order to show up in dom. else semantic ui prevents it */}
            {/* everytime we add a new prop, redux-form will see that we passd in a prop it doesnt know what to do with. by default, it will pass it to renderInput */}
                <Field 
                    name='title' 
                    component={this.renderInput} 
                    label='Enter Title'
                />
                <Field 
                    name='description' 
                    component={this.renderInput} 
                    label='Enter Description'
                />
                <button className='ui button primary'>Submit</button>
            </form>
        )    
    }
};

const validate = formValues => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'you must enter a valid title';
    }
    if(!formValues.description){
        errors.description = 'you must enter a description';
    }
     return errors;
};

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);