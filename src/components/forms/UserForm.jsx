import React from 'react';
import { Flex } from '@chakra-ui/react';
import MainLink from 'components/MainLink';
import MainHeader from 'components/headers/MainHeader';
import FormInput from 'components/forms/inputs/FormInput';
import SelectInput from './inputs/SelectInput';
import FooterLogo from 'components/FooterLogo';

const UserForms = ({ formikName, formikSurname, formikEmail, formikPhone }) => {
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
          {...formikName}
          name="name"
          label="სახელი"
          placeholder="გრიშა"
          textHelper="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          type="text"
          mb="6px"
          w={['100%', '390px']}
        />
        <FormInput
          {...formikSurname}
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
        {...formikEmail}
        name="email"
        label="მეილი"
        placeholder="grish666@redberry.ge"
        textHelper="უნდა მთავრდებოდეს @redberry.ge-ით"
        type="email"
      />
      <FormInput
        {...formikPhone}
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
        // onSubmit={formik.handleSubmit}
      />
      <FooterLogo />
    </Flex>
  );
};

export default UserForms;
