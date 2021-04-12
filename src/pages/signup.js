import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'


function signup () {
  const options = [
    { key: 'Email', value: 'emailmoc' },
    { key: 'Telephone', value: 'telephonemoc' }
  ]
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phone: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
    modeOfContact: Yup.string().required('Required'),
    phone: Yup.string().when('modeOfContact', {
      is: 'telephonemoc',
      then: Yup.string().required('Required')
    })
  })

  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form>
            <Field
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <Field
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <Field
              control='input'
              type='password'
              label='Confirm Password'
              name='confirmPassword'
            />
            <Field
              control='radio'
              label='Mode of contact'
              name='modeOfContact'
              options={options}
            />
            <Field
              control='input'
              type='text'
              label='Phone number'
              name='phone'
            />
            <button type='submit' disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default signup;