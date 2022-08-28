import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from 'pages/Landing';
import EmployeeInfo from 'pages/EmployeeInfo';
import LaptopSpecs from 'pages/LaptopSpecs';
import Success from 'pages/Success';
import List from 'pages/List';

const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/landing" />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/employee-info" element={<EmployeeInfo />} />
      <Route path="/laptop-specs" element={<LaptopSpecs />} />
      <Route path="/success" element={<Success />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
};

export default RoutePaths;
