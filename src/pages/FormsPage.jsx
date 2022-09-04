import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MainHeader from 'components/headers/MainHeader';
import UserForms from 'components/forms/UserForm';
import DeviceForm from 'components/forms/DeviceForm';
import FooterLogo from 'components/FooterLogo';

const FormsPage = () => {
  const [activeTab, setActiveTab] = useState(true);

  //Formik validation

  const formik = useFormik({
    initialValues: { name: '', surname: '', email: '', phone: '' },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'მინიმუმ 2 სიმბოლო, ქართული ასოები')
        .matches(/^[ა-ჰ]+$/, 'გამოიყენე ქართული ასოები'),
      surname: Yup.string()
        .min(2, 'მინიმუმ 2 სიმბოლო, ქართული ასოები')
        .matches(/^[ა-ჰ]+$/, 'გამოიყენე ქართული ასოები'),
      email: Yup.string().matches(
        /^[\w.+\-]+@redberry\.ge$/,
        'გამოიყენე @redberry.ge'
      ),
      phone: Yup.string().matches(
        /^(\+?995)?(79\d{7}|5\d{8})$/,
        'გამოიყენე ქართული მობ-ნომრის ფორამტი'
      ),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  //Active Toggle

  const handleActiveOn = () => {
    setActiveTab(true);
  };

  const handleActiveOff = () => {
    setActiveTab(false);
  };

  return (
    <Box>
      <MainHeader
        activeTab={activeTab}
        handleActiveOn={handleActiveOn}
        handleActiveOff={handleActiveOff}
      />
      {activeTab && (
        <UserForms
          handleActiveOn={handleActiveOn}
          handleActiveOff={handleActiveOff}
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
      )}
      {!activeTab && <DeviceForm handleActiveOn={handleActiveOn} />}
      <FooterLogo mt="60px" />
    </Box>
  );
};

export default FormsPage;
