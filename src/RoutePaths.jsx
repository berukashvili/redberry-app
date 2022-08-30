import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from 'pages/Landing';
import UserInfo from 'pages/UserInfo';
import LaptopSpecs from 'pages/LaptopSpecs';
import Success from 'pages/Success';
import List from 'pages/List';
import Details from 'pages/Details';

const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/landing" />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/user-info" element={<UserInfo />} />
      <Route path="/laptop-specs" element={<LaptopSpecs />} />
      <Route path="/success" element={<Success />} />
      <Route path="/list" element={<List />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default RoutePaths;
