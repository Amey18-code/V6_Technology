import React from 'react'
import Heading from '../smallComponents/Heading'

const RideHistory = () => {

  const tableData = [
    {
      sno: 1,
      date: '2024-03-03',
      pickup: {
        time: '10:00 AM',
        location: 'Pickup Location A',
      },
      drop: {
        time: '12:30 PM',
        location: 'Drop Location B',
      },
      totalKms: 50,
      totalAmt: 100,
    },
    {
      sno: 2,
      date: '2024-03-04',
      pickup: {
        time: '09:30 AM',
        location: 'Pickup Location C',
      },
      drop: {
        time: '11:45 AM',
        location: 'Drop Location D',
      },
      totalKms: 35,
      totalAmt: 80,
    },
  ];
  return (
    <div>
      <div className='w-full h-[100px] flex items-center px-10'>
      <Heading headingText={"Ride History"} />
      </div>
      <div className="driverList w-[94%] m-auto">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Pickup Time & Location</th>
              <th>Drop Time & Location</th>
              <th>Total Kms</th>
              <th>Total Amt</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.sno}</td>
                <td>{item.date}</td>
                <td>
                  <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left">{item.pickup.time} - {item.pickup.location}</marquee>
                </td>
                <td>
                  <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left">{item.drop.time} - {item.drop.location}</marquee>
                </td>
                <td>{item.totalKms}</td>
                <td>{item.totalAmt}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default RideHistory
