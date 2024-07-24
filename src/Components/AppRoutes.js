import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './RoutesComponents/Dashboard';
import Drivers from './RoutesComponents/Drivers';
import Users from './RoutesComponents/Users';
import VehicalMaster from './RoutesComponents/VehicalMaster';
import SubscriptionUser from './RoutesComponents/SubscriptionUser';
import SubscriptionDriver from './RoutesComponents/SubscriptionDriver';
import SchoolExpress from './RoutesComponents/SchoolExpress';
import Insurance from './RoutesComponents/Insurance';
import RideHistory from './RoutesComponents/RideHistory';
import HelpSupport from './RoutesComponents/HelpSupport';
import SignIn from './Register/SignIn';
import Navbar from './Navbar';
import Footer from './RoutesComponents/Footer';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/admin/*" element={<><Navbar />
          <ProtectedRoutes />
          <Footer /></>} />
        <Route path="*" element={<div className='h-screen pb-40 w-full flex justify-center flex-col items-center text-center text-3xl font-bold'> <h1>404</h1> <h1>Page Not Found</h1></div>} />
      </Routes>
    </Router>
  );
};

const ProtectedRoutes = () => {
  return (
    <div className='flex h-[680px]'>
      <div className="w-[18%] bg-white sidebarNav">
        <Sidebar />
      </div>
      <div className="w-[82%]   h-[680px]">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="users" element={<Users />} />
          <Route path="vehicalMaster" element={<VehicalMaster />} />
          <Route path="subscriptionDriver" element={<SubscriptionDriver />} />
          <Route path="subscriptionUser" element={<SubscriptionUser />} />
          <Route path="schoolExpress" element={<SchoolExpress />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="rideHistory" element={<RideHistory />} />
          <Route path="helpSupport" element={<HelpSupport />} />
          <Route path="*" element={<div className='h-[80%] w-full flex justify-center flex-col items-center text-center text-3xl font-bold'> <h1>404</h1> <h1>Page Not Found</h1></div>} />
        </Routes >
      </div>
    </div>
  );
};

export default AppRoutes;
