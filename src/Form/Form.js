import React from 'react';
import { Field, reduxForm } from 'redux-form';

let Form = ({handleSubmit}) => {
    // console.log(handleSubmit);
    return (
        <div className='form'>
            <form  onSubmit={handleSubmit} className="form">
                        <div className="input">
                        <Field name="firstName" component="input" type="text" />
                        <Field name="email" component="input" type="email" />                            
                        <Field name="textarea" component="input" type="textarea" />
                        </div>
                     <input className="submit" type="submit" value='send'/>
            </form>
        </div>
    );
};

Form = reduxForm({
    // a unique name for the form
    form: 'contact'
  })(Form)

export default Form;