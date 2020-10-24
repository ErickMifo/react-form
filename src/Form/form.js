import React from 'react';
import './styles.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikField from './FormikField/FormikField';
import FormikSelect from './FormikSelect/FormikSelect';
import Button from '@material-ui/core/Button';

const initialValues = {
  name: '',
  position: '',
  email: '',
  password: '',
  passwordConfirm: ''
}

const selectItem = [

  {
    label: 'Front End',
    value: 'front-end'
  },
  {
    label: 'Back End',
    value: 'back-end'
  },
  {
    label: 'Devops',
    value: 'devops'
  },
];

const emailAdresses = [
  'test1@gmail.com',
  'test2@gmail.com',
  'test3@gmail.com',
  'test4@gmail.com',
]

const lowerCaseRegex = /(?=.*[a-z])/;
const upperCaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short')
    .required('Required!'),
  position: Yup.string()
    .required('Required!'),
  email: Yup.string()
    .lowercase()
    .email('Must be a valid email!')
    .notOneOf(emailAdresses, 'Email already taken.')
    .required('Required!'),
  password: Yup.string()
    .matches(lowerCaseRegex, 'At least one lower case required')
    .matches(upperCaseRegex, 'At least one upper required')
    .matches(numericRegex, 'At least one number required')
    .min(8, 'Minimum 8 characters required')
    .required('Required!'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must be the same')
    .required('Required!')
})

const Formulario = () => {

  const handleSubmit = (value) => {
    alert(JSON.stringify(value))
  }
return(
  <div className="App">
      <h1>Sign Up</h1>
      <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
      >
        {({ dirty, isValid }) => {
          return(
            <Form>
              <FormikField name='name' label='Name' />
              <FormikField name='email' label='Email' />
              <FormikField name='password' label='Password' type="password" /> 
              <FormikField name='passwordConfirm' label='Password Confirm' type="password" /> 
           
              <FormikSelect name="position" items={selectItem} label="Position"/>



              <Button variant="contained" color="primary" disabled={!dirty || !isValid} type="submit">
                  Submit
              </Button>

              
            </Form>
          )
        }}
      </Formik>
  </div>
)};

export default Formulario;
