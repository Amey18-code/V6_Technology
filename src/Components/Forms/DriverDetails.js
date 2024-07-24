import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import BillCopy from "./BillCopy";

const DriverDetails = ({ showHideViewFunc, viewData = {}, rideData = [] }) => {
  const [showBill, setShowBill] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);

  const handleReceiptClick = (sNo) => {
    setSelectedRide(sNo);
    setShowBill(true);
  };

  return (
    <>
      <div className="w-[80%] max-w-[840px] h-[650px] overflow-scroll overflow-x-hidden bg-white pb-7 pt-3 m-auto absolute right-[25%] top-[-35px] rounded-xl driverForm z-20">
        <p
          onClick={() => showHideViewFunc(false)}
          className="sticky top-[13px] cursor-pointer float-end right-[30px] hover:bg-red-300 z-10 transform rotate-45 text-2xl p-1 bg-[#8C7FE6] rounded-2xl text-[#E02121]"
        >
          <AiOutlinePlus />
        </p>
        <div className="gap-4 mx-4 my-6">
          <h1 className="font-semibold text-[#464650] text-[15px]">
            Driver Details
          </h1>
          <div className="flex flex-col driverDetail bg-[#f4f3fb] rounded-lg my-1 gap-2">
            {/* Existing driver details code */}
          </div>
        </div>
        <div className="mx-4 my-6">
          <h1 className="font-semibold text-[#464650] text-[15px] mx-4">
            Vehicle Details
          </h1>
          <div className="flex justify-between driverDetail rounded-md">
            {/* Existing vehicle details code */}
          </div>
        </div>
        <div className="mx-4 my-6">
          <h1 className="font-semibold text-[#464650] text-[15px]">
            Ride Details
          </h1>
          <div className="rideDetails m-2 bg-white">
            <table>
              <thead>
                <tr>
                  <th style={{ maxWidth: "35px" }}>S.No</th>
                  <th>Rider Name</th>
                  <th>PickUp Location & Time</th>
                  <th>Drop Location & Time</th>
                  <th>Status</th>
                  <th style={{ maxWidth: "35px" }}>Kms</th>
                  <th>Total</th>
                  <th>Payment Mode</th>
                  <th>Receipt</th>
                </tr>
              </thead>
              <tbody>
                {rideData.length > 0 ? (
                  rideData.map((item, index) => (
                    <tr key={index}>
                      <td style={{ maxWidth: "35px" }}>{item.sNo}</td>
                      <td>
                        {item.riderName.length > 6 ? (
                          <marquee>{item.riderName}</marquee>
                        ) : (
                          <p>{item.riderName}</p>
                        )}
                      </td>
                      <td>
                        {item.pickUpLocationAndTime.length > 6 ? (
                          <marquee>{item.pickUpLocationAndTime}</marquee>
                        ) : (
                          <p>{item.pickUpLocationAndTime}</p>
                        )}
                      </td>
                      <td>
                        {item.dropLocationAndTime.length > 6 ? (
                          <marquee>{item.dropLocationAndTime}</marquee>
                        ) : (
                          <p>{item.dropLocationAndTime}</p>
                        )}
                      </td>
                      <td>
                        <button
                          className={`px-1 py-1 text-xs rounded-sm text-white w-full ${
                            item.status === "Completed"
                              ? "bg-green-500"
                              : item.status === "Cancelled"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                          }`}
                        >
                          {item.status}
                        </button>
                      </td>
                      <td>{item.kms}</td>
                      <td>
                        {item.total.length > 6 ? (
                          <marquee>{item.total}</marquee>
                        ) : (
                          <p>{item.total}</p>
                        )}
                      </td>
                      <td>{item.paymentMode}</td>
                      <td>
                        <button
                          onClick={() => handleReceiptClick(item.sNo)}
                          className="text-xs rounded-sm bg-[#8c7fe6] text-white px-1 py-1 flex items-center gap-2"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="text-xl receipt"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              strokeLinejoin="round"
                              strokeWidth="32"
                              d="M160 336V48l32 16 32-16 31.94 16 32.37-16L320 64l31.79-16 31.93 16L416 48l32.01 16L480 48v224"
                            ></path>
                            <path
                              fill="none"
                              strokeLinejoin="round"
                              strokeWidth="32"
                              d="M480 272v112a80 80 0 0 1-80 80 80 80 0 0 1-80-80v-48H48a15.86 15.86 0 0 0-16 16c0 64 6.74 112 80 112h288"
                            ></path>
                            <path
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="32"
                              d="M224 144h192m-128 80h128"
                            ></path>
                          </svg>
                          Receipt
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center">
                      No Ride Data Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {showBill && (
          <BillCopy
            rideData={rideData}
            selectedRide={selectedRide}
            setShowBill={setShowBill}
          />
        )}
      </div>
    </>
  );
};

export default DriverDetails;
