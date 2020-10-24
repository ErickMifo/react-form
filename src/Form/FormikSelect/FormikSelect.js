import React from 'react';
import { ErrorMessage, Field } from 'formik'
import './styles.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const MaterialUISelectField = ({label, children, errorString, value, name, onChange, onBlur}) => {
    return(
    <div>
<FormControl fullWidth required >
<InputLabel >{label}</InputLabel>
<Select name={name} onChange={onChange} onBlur={onBlur} value={value}>
    {children}
</Select>
<FormHelperText>{errorString}</FormHelperText>
</FormControl>
</div>
    )
}

const FormikSelect = ({ name, items, label }) =>{
    return(
        <div  className="FormikSelect">
            <Field as={MaterialUISelectField} required fullWidth name={name} label={label} errorString={<ErrorMessage name={name} />}>
            {items.map(item => (<MenuItem key={item.value} value={item.value}> {item.label} </MenuItem>))}
            </Field>
        </div>
    )
};

export default FormikSelect