import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Flex } from '@chakra-ui/react';
import MainLink from 'components/MainLink';
import MainHeader from 'components/MainHeader';
import FormInput from 'components/FormInput';
import SelectInput from 'components/SelectInput';
import FooterLogo from 'components/FooterLogo';

const UserInfo = () => {
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
    <Flex direction="column" justify="space-between" h={['', '100vh']}>
      <MainHeader
        text1="მომხმარებლის ინფო"
        text2="ლეპტოპის მახასიათებლები"
        display2={['none', 'inline']}
        to="/landing"
        vis2="hidden"
      />
      <Flex direction={['column', 'row']} justify="space-between">
        <FormInput
          onSubmit={formik.handleSubmit}
          onChange={formik.handleChange}
          value={formik.values.name}
          errors={formik.errors.name}
          onBlur={formik.handleBlur}
          touched={formik.touched.name}
          name="name"
          label="სახელი"
          placeholder="გრიშა"
          textHelper="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          type="text"
          mb="6px"
          w={['100%', '390px']}
        />
        <FormInput
          onSubmit={formik.handleSubmit}
          onChange={formik.handleChange}
          values={formik.values.surname}
          errors={formik.errors.surname}
          onBlur={formik.handleBlur}
          touched={formik.touched.surname}
          name="surname"
          label="გვარი"
          placeholder="ბაგრატიონი"
          textHelper="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          type="text"
          w={['100%', '390px']}
        />
      </Flex>
      <Flex direction="column" my="20px">
        <SelectInput
          onChange={formik.handleChange}
          value={formik.values.email}
          errors={formik.errors.email}
          onBlur={formik.handleBlur}
          touched={formik.touched.email}
          name="team"
          placeholder="თიმი"
          list={['დეველოპმენტი', 'HR', 'გაყიდვები', 'მარკეტინგი']}
          mb={['70px', '50px']}
        />
        <SelectInput
          name="position"
          placeholder="პოზიცია"
          list={['სენიორი', 'ინტერნი', 'მიდლი', 'ლიდი']}
        />
      </Flex>
      <FormInput
        onSubmit={formik.handleSubmit}
        onChange={formik.handleChange}
        isInvalid={formik.errors.email}
        values={formik.values.email}
        errors={formik.errors.email}
        onBlur={formik.handleBlur}
        touched={formik.touched.email}
        name="email"
        label="მეილი"
        placeholder="grish666@redberry.ge"
        textHelper="უნდა მთავრდებოდეს @redberry.ge-ით"
        type="email"
      />
      <FormInput
        onSubmit={formik.handleSubmit}
        onChange={formik.handleChange}
        isInvalid={formik.errors.phone}
        values={formik.values.phone}
        errors={formik.errors.phone}
        onBlur={formik.handleBlur}
        touched={formik.touched.phone}
        name="phone"
        label="ტელეფონის ნომერი"
        placeholder="+995 598 00 07 01"
        textHelper=" ქართული მობ-ნომრის ფორმატი"
        type="number"
      />
      <MainLink
        color="white"
        bg="secondary"
        px={['35px', '78px']}
        py={['8px', '16px']}
        ml="auto"
        to="/laptop-specs"
        text="შემდეგი"
        onSubmit={formik.handleSubmit}
      />
      <FooterLogo />
    </Flex>
  );
};

export default UserInfo;
