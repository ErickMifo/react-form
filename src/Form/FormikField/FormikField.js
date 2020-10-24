import React from 'react';
import './styles.css';
import { ErrorMessage, Field } from 'formik'
import TextField from '@material-ui/core/TextField';

const FormikField = ({ label, name, type = 'text' }) => {
    return (
        <div className="FormikField">
            <Field 
            autoComplete="off"
            as={TextField}
            label={label}
            name={name}
            type={type}
            helperText={<ErrorMessage name={name} />}
            variant="outlined"
            fullWidth
            required />
        </div>
    )
}

export default FormikField