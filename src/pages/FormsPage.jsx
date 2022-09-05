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
  const [textOff, setTextOff] = useState(['none', 'inline']);

  //Formik validation
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      team: '',
      position: '',
      email: '',
      device: '',
      core: '',
      thread: '',
      date: '',
      price: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'მინიმუმ 2 სიმბოლო, ქართული ასოები')
        .matches(/^[ა-ჰ]+$/, 'გამოიყენე ქართული ასოები'),
      surname: Yup.string()
        .min(2, 'მინიმუმ 2 სიმბოლო, ქართული ასოები')
        .matches(/^[ა-ჰ]+$/, 'გამოიყენე ქართული ასოები'),
      team: Yup.string('').required(''),
      email: Yup.string().matches(
        /^[\w.+-]+@redberry\.ge$/,
        'გამოიყენე @redberry.ge'
      ),
      phone: Yup.string().matches(
        /^(\+?995)?(79\d{7}|5\d{8})$/,
        'გამოიყენე ქართული მობ-ნომრის ფორამტი'
      ),
      device: Yup.string('')
        .min('ლათინური ასოები, ციფრები, !@#$%^&*()_+=')
        .matches(/([A-Z])\w+/, 'გამოიყენე ლათინური ასოები'),
      core: Yup.string('')
        .min('მხოლოდ ციფრები')
        .matches(/^[0-9]*$/, ''),
      ram: Yup.string('')
        .min('მხოლოდ ციფრები')
        .matches(/^[0-9]*$/, ''),
      thread: Yup.string('')
        .min('მხოლოდ ციფრები')
        .matches(/^[0-9]*$/, ''),
      date: Yup.string('')
        .min('მხოლოდ ციფრები')
        .matches(/^[0-9]*$/, ''),
      price: Yup.string('')
        .min('მხოლოდ ციფრები')
        .matches(/^[0-9]*$/, ''),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  //Active Toggle

  const handleActiveOn = () => {
    setActiveTab(true);
    setTextOff(['none', 'inline']);
  };

  const handleActiveOff = () => {
    setActiveTab(false);
    setTextOff(['inline', 'inline']);
  };

  return (
    <Box>
      <MainHeader
        activeTab={activeTab}
        textOff={textOff}
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
          formikTeam={{
            onSubmit: formik.handleSubmit,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            value: formik.values.team,
            errors: formik.errors.team,
            touched: formik.touched.team,
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
      {!activeTab && (
        <DeviceForm
          handleActiveOn={handleActiveOn}
          formikDevice={{
            onSubmit: formik.handleSubmit,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            value: formik.values.device,
            errors: formik.errors.device,
            touched: formik.touched.device,
          }}
          formikCore={{
            onSubmit: formik.handleSubmit,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            value: formik.values.core,
            errors: formik.errors.core,
            touched: formik.touched.core,
          }}
          formikThread={{
            onSubmit: formik.handleSubmit,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            value: formik.values.thread,
            errors: formik.errors.thread,
            touched: formik.touched.thread,
          }}
          formikRam={{
            onSubmit: formik.handleSubmit,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            value: formik.values.ram,
            errors: formik.errors.ram,
            touched: formik.touched.ram,
          }}
          formikDate={{
            onSubmit: formik.handleSubmit,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            value: formik.values.date,
            errors: formik.errors.date,
            touched: formik.touched.date,
          }}
          formikPrice={{
            onSubmit: formik.handleSubmit,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            value: formik.values.price,
            errors: formik.errors.price,
            touched: formik.touched.price,
          }}
        />
      )}
      <FooterLogo mt="60px" />
    </Box>
  );
};

export default FormsPage;
