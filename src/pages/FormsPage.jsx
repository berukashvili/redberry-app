import React from 'react';
import { Box } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UserForms from 'components/forms/UserForm';
import DeviceForm from 'components/forms/DeviceForm';

const FormsPage = () => {
  const formik = useFormik({
    initialValues: { name: '', surname: '', email: '', phone: '' },
    validationSchema: Yup.object({
      name: Yup.string().min(2, 'გამოიყენე ქართული ასოები'),
      surname: Yup.string().min(2, 'გამოიყენე ქართული ასოები'),
      email: Yup.string().min(2, 'გამოიყენე @redberry.ge'),
      phone: Yup.string().min(2, 'გამოიყენე ქართული მობ-ნომრის ფორამტი'),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  return (
    <Box>
      <UserForms
        formikName={{
          onSubmit: formik.handleSubmit,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          value: formik.values.name,
          errors: formik.errors.name,
          touched: formik.touched.name,
        }}
        formikSurname={{
          onSubmit: formik.handleSubmit,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          value: formik.values.surname,
          errors: formik.errors.surname,
          touched: formik.touched.surname,
        }}
        formikEmail={{
          onSubmit: formik.handleSubmit,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          value: formik.values.email,
          errors: formik.errors.email,
          touched: formik.touched.email,
        }}
        formikPhone={{
          onSubmit: formik.handleSubmit,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          value: formik.values.phone,
          errors: formik.errors.phone,
          touched: formik.touched.phone,
        }}
      />
      <DeviceForm />
    </Box>
  );
};

export default FormsPage;
