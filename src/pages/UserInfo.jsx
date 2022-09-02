import React from 'react';
import { Flex } from '@chakra-ui/react';
import MainHeader from 'components/MainHeader';
import FormInput from 'components/FormInput';
import SelectInput from 'components/SelectInput';
import MainBtn from 'components/MainBtn';
import FooterLogo from 'components/FooterLogo';

const UserInfo = () => {
  return (
    <Flex direction="column" justify="space-between" h={['', '100vh']}>
      <MainHeader
        text1="მომხმარებლის ინფო"
        text2="ლეპტოპის მახასიათებლები"
        display2={['none', 'inline']}
      />
      <Flex direction={['column', 'row']} justify="space-between">
        <FormInput
          label="სახელი"
          placeholder="გრიშა"
          val="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          type="text"
          mb="6px"
          w={['100%', '390px']}
        />
        <FormInput
          label="გვარი"
          placeholder="ბაგრატიონი"
          val="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          type="text"
          w={['100%', '390px']}
        />
      </Flex>
      <Flex direction="column" my="20px">
        <SelectInput
          placeholder="თიმი"
          list={['დეველოპმენტი', 'HR', 'გაყიდვები', 'მარკეტინგი']}
          mb={['70px', '50px']}
        />
        <SelectInput
          placeholder="პოზიცია"
          list={['სენიორი', 'ინტერნი', 'მიდლი', 'ლიდი']}
        />
      </Flex>
      <FormInput
        label="მეილი"
        placeholder="grish666@redberry.ge"
        val="უნდა მთავრდებოდეს @redberry.ge-ით"
        type="email"
      />
      <FormInput
        label="ტელეფონის ნომერი"
        placeholder="+995 598 00 07 01"
        val=" ქართული მობ-ნომრის ფორმატი"
        type="number"
      />
      <MainBtn
        color="white"
        bg="secondary"
        px={['28px', '52px']}
        py={['24px', '30px']}
        fontSize="18px"
        mb={['32px', '2px']}
        ml="auto"
        text="შემდეგი"
      ></MainBtn>
      <FooterLogo />
    </Flex>
  );
};

export default UserInfo;
