import React from 'react'
import Heading from '../smallComponents/Heading'

const Dashboard = () => {
  return (
    <>
    <div className='w-full h-[100px] flex items-center px-10'>
      <Heading headingText={'Dashboard'} />
    </div>
      <div className='min-h-[580px] dashboard'>
        <div className='flex flex-wrap gap-10 w-5/6 m-auto'>
          <div className="box bg-[#7DA0FA]"><p>Ride History </p> <p>800</p></div>
          <div className="box bg-[#474793]"><p>Total Register Vehicles </p> <p>150</p></div>
          <div className="box bg-[#f3797e]"><p>Emergency </p><p>100</p></div>
          <div className="box bg-[#7978e9]"><p>Total Users </p><p>400</p></div>
          <div className="box bg-[#7DA0FA]"><p>Total Users Subscription </p>  <p>150</p></div>
          <div className="box bg-[#474793]"><p>Total Clients</p><p>150</p></div>
        </div>
      </div>
    </>
  )
}

export default Dashboard


