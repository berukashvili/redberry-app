import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import FormInput from 'components/forms/inputs/FormInput';
import SelectInput from './inputs/SelectInput';
import MainBtn from 'components/buttons/MainBtn';
import { fetchTeams } from 'api/RedberryApi';

const UserForms = ({
  formikName,
  formikSurname,
  formikTeam,
  formikEmail,
  formikPhone,
  firstTab,
  handleActiveOff,
}) => {
  const [teams, setTeams] = useState([]);
  //Teams and Positions Data
  useEffect(() => {
    const getTeams = async () => {
      const { data } = await fetchTeams.get('/teams');
      setTeams(data);
    };

    getTeams();
  }, []);

  return (
    <Flex
      direction="column"
      justify="space-between"
      h={['', '100vh']}
      display={firstTab}
    >
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
          {...formikTeam}
          name="team"
          placeholder="თიმი"
          mb={['70px', '50px']}
        />
        <SelectInput name="position" placeholder="პოზიცია" />
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
      <MainBtn
        color="white"
        bg="secondary"
        px={['35px', '60px']}
        py={['8px', '30px']}
        ml="auto"
        text="შემდეგი"
        onClick={handleActiveOff}
      />
    </Flex>
  );
};

export default UserForms;
