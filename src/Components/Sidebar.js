import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";
import { MdLocalTaxi } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const location = useLocation();
  const { RecieveData } = useSelector((state => state.panelSlice));
  return (
    <>
      <div className="mt-6">
        <ul>
          <li className='m-2'>
            <Link className={location.pathname.endsWith('/admin/dashboard') ? 'sideBarLinkActive sideBarLink' : 'sideBarLinkNot sideBarLink'} to="/admin/dashboard">
              <RxDashboard />
              <span ><h3>Dashboard</h3></span>
            </Link>
          </li>
          <li className='m-2'>
            <Link className={location.pathname.endsWith('/admin/drivers') ? 'sideBarLinkActive sideBarLink' : 'sideBarLinkNot sideBarLink'} to="/admin/drivers">
              <FaRegUser />
              <span ><h3>Drivers</h3></span>
              {RecieveData.length > 0 && <span className="rounded-2xl bg-red-600 text-xs text-white px-2 py-1">{RecieveData.length}</span>}
            </Link>
          </li>

          <li className='m-2'>
            <Link className={location.pathname.endsWith('/admin/users') ? 'sideBarLinkActive sideBarLink' : 'sideBarLinkNot sideBarLink'} to="/admin/users">
              <FiUsers />
              <span ><h3>Users</h3></span>
            </Link>
          </li>

          <li className='m-2'>
            <Link className={location.pathname.endsWith('/admin/vehicalMaster') ? 'sideBarLinkActive sideBarLink' : 'sideBarLinkNot sideBarLink'} to="/admin/vehicalMaster">
              <FaCar />
              <span ><h3>Vehical Master</h3></span>
              <div className="rounded-2xl bg-red-600 text-xs text-white px-2 py-1">{12}</div>
            </Link>
          </li>

          <li className='m-2'>
            <Link className={location.pathname.endsWith('/admin/subscriptionDriver') ? 'sideBarLinkActive sideBarLink' : 'sideBarLinkNot sideBarLink'} to="/admin/subscriptionDriver">
              <FaRegIdCard />
              <span ><h3>Subscription Driver</h3></span>
            </Link>
          </li>

          <li className='m-2'>
            <Link className={location.pathname.endsWith('/admin/subscriptionUser') ? 'sideBarLinkActive sideBarLink' : 'sideBarLinkNot sideBarLink'} to="/admin/subscriptionUser">
              <FaRegAddressCard />
              <span ><h3>Subscription Users</h3></span>
              <span className="rounded-2xl bg-red-600 text-xs text-white px-2 py-1">{9}</span>
            </Link>
          </li>

          <li className='m-2'>
            <Link className={location.pathname.endsWith('/admin/schoolExpress') ? 'sideBarLinkActive sideBarLink' : 'sideBarLinkNot sideBarLink'} to="/admin/schoolExpress">
              <MdLocalTaxi />
              <span ><h3>School Express</h3></span>
              <div className="rounded-2xl bg-red-600 text-xs text-white px-2 py-1">{10}</div>
            </Link>
          </li>

          <li className='m-2'>
            <Link className={location.pathname.endsWith('/admin/insurance') ? 'sideBarLinkActive sideBarLink' : 'sideBarLinkNot sideBarLink'} to="/admin/insurance">
              <FaHandHoldingUsd />
              <span ><h3>Insurance Partner</h3></span>
            </Link>
          </li>
          {/* <hr style={{ border: '1px solid gray', width: '100%' }}></hr> */}
          <li className='m-2'>
            <Link className={location.pathname.endsWith('/admin/rideHistory') ? 'sideBarLinkActive sideBarLink' : 'sideBarLinkNot sideBarLink'} to="/admin/rideHistory">
              <FaHistory />
              <span ><h3>Ride History</h3></span>
            </Link>
          </li>

          <li className='m-2'>
            <Link className={location.pathname.endsWith('/admin/helpSupport') ? 'sideBarLinkActive sideBarLink' : 'sideBarLinkNot sideBarLink'} to="/admin/helpSupport">
              <MdSupportAgent />
              <span ><h3>Help & Support</h3></span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar



