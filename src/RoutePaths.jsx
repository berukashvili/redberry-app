import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from 'pages/Landing';
import EmployeeInfo from 'pages/EmployeeInfo';

const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/landing" />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/employee-info" element={<EmployeeInfo />} />
    </Routes>
  );
};

export default RoutePaths;
