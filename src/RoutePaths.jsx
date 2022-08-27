import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from 'pages/Landing';

const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/" element={<Navigate replace to="/landing" />} />
    </Routes>
  );
};

export default RoutePaths;
