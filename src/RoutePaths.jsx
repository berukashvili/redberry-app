import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from 'pages/Landing';
import EmployeeInfo from 'pages/EmployeeInfo';
import LaptopInfo from 'pages/LaptopInfo';
import Success from 'pages/Success';

const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/landing" />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/employee-info" element={<EmployeeInfo />} />
      <Route path="/laptop-info" element={<LaptopInfo />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default RoutePaths;
