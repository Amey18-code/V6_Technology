import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import driverImg from '../../assets/Image/driverImg.png'
import user from '../../assets/Image/User.jpg'
import receiptImg from '../../assets/Image/receipt.jpg'
import NotAvailble from '../../assets/Image/Not_AvailableImg.png'

const UserDetails = ({ showHideViewFuncView, viewData }) => {
    const RideDeatailData = [1]
    const [detailHeading, setdetailHeading] = useState(false);
    return (
        <>
            <div className="w-[80%] max-w-[840px] h-[650px] overflow-scroll overflow-x-hidden bg-white pb-7 pt-3 m-auto absolute right-[25%] top-[-35px] rounded-xl driverForm z-20">
                <p onClick={() => showHideViewFuncView(false)} className='sticky top-[13px] cursor-pointer float-end right-[30px] hover:bg-red-300 z-10 transform rotate-45 text-2xl p-1 bg-[#8C7FE6] rounded-2xl text-[#E02121]'><AiOutlinePlus /></p>
                <div className=" gap-4 mx-4 my-6">
                    <h1 className='font-semibold text-[#464650] text-[15px]'>Driver Details</h1>
                    {/* <hr className='w-full h-[1px] bg-[#8c7fe6]' /> */}
                    <div className="flex flex-col driverDetail bg-[#f4f3fb] rounded-lg my-1 gap-2">
                        <div>
                            <div className=" rounded-l-lg flex w-full py-4 px-2  justify-center items-start">
                                <div className='w-[28%]'>
                                    <img src={viewData.driverDetails.profileImage ? process.env.REACT_APP_BASE_URL + viewData.driverDetails.profileImage || `http://157.245.102.51:3002/${viewData.driverDetails.profileImage}` : user} className='h-[180px] w-[180px] rounded-md' alt="ProfileImg" />
                                </div>
                                <div className="flex flex-col gap-2 w-[36%]">
                                    <h2 className='font-semibold text-[#464650] text-[15px]'>{viewData.driverDetails.fullname}</h2>
                                    <p className='text-gray-500 text-sm'>Owner</p>
                                    <h2 className='font-semibold text-[#464650] text-[15px]'>Phone No</h2>
                                    <p className='text-gray-500 text-sm'>+91{viewData.driverDetails.phone}</p>
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-full'>E-mail </h2>
                                    <p className='text-gray-500 text-sm gap-2 w-full '>{viewData.driverDetails.email}</p>
                                </div>
                                <div className="flex flex-col justify-start items-start gap-2 w-[34%]">
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-full'>Address</h2>
                                    <p className='text-gray-500 text-sm w-full '>{viewData.driverDetails.address} </p>
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-full'>City</h2>
                                    <p className='text-gray-500 text-sm w-full '>{viewData.driverDetails.city} </p>
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-full'>Postal Code</h2>
                                    <p className='text-gray-500 text-sm w-full '>{viewData.driverDetails.postalCode} </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full '>
                            <div className='flex gap-2'>
                                <div className='w-3/6 flex flex-col items-center justify-center gap-2'>
                                    <h2 className='font-semibold text-[#464650] text-[15px] '>Aadhar Card</h2>
                                    <img src={viewData.driverDetails.aadharCard ? process.env.REACT_APP_BASE_URL + viewData.driverDetails.aadharCard || `http://157.245.102.51:3002/${viewData.driverDetails.aadharCard}` : NotAvailble} className='h-[300px] w-full rounded-md' alt="ProfileImg" />
                                </div>
                                <div className='w-3/6 flex flex-col items-center justify-center gap-2'>
                                    <h2 className='font-semibold text-[#464650] text-[15px] '>Licence</h2>
                                    <img src={viewData.driverDetails.drivingLicense ? process.env.REACT_APP_BASE_URL + viewData.driverDetails.drivingLicense || `http://157.245.102.51:3002/${viewData.driverDetails.drivingLicense}` : NotAvailble} className='h-[300px] w-full rounded-md' alt="ProfileImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className=" mx-4 my-6">
                    <h1 className='font-semibold text-[#464650] text-[15px] mx-4'>Vehicle Details</h1>
                    <div className="flex  justify-between driverDetail rounded-md ">
                        <div className="bg-white  flex items-center justify-center w-[48%] rounded-lg ">
                            <div className="w-full my-1 p-4  flex flex-col items-center gap-2">
                                <div className="flex  w-full">
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Type</h2>
                                    <p className='text-gray-500 text-sm w-[50%] '>{viewData.driverVehicleDetails.type}</p>
                                </div>
                                <div className="flex justify-start w-full">
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Registration Number</h2>
                                    <p className='text-gray-500 text-sm gap-2 w-[50%]'>{viewData.driverVehicleDetails.registrationNumber}</p>
                                </div>
                                <div className="flex  w-full">
                                    <h2 className='font-semibold text-[#464650] text-[15px] w-[50%]'>Number Plate</h2>
                                    <p className='text-gray-500 text-sm w-[50%] '>{viewData.driverVehicleDetails.numberPlate}</p>
                                </div>
                                <div className="flex  w-full">
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Make</h2>
                                    <p className='text-gray-500 text-sm w-[50%] '>{viewData.driverVehicleDetails.make}</p>
                                </div>
                                <div className="flex justify-start items-start w-full">
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Model</h2>
                                    <p className='text-gray-500 text-sm w-[50%] '>{viewData.driverVehicleDetails.model}</p>
                                </div>

                            </div>
                        </div>
                        <div className="bg-white  flex items-center justify-center w-[48%] rounded-lg ">
                            <div className="w-full my-1 p-4  flex flex-col items-center gap-2">
                                <div className="flex justify-start items-start w-full">
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Vehical Color</h2>
                                    <p className='text-gray-500 text-sm w-[50%] '>{viewData.driverVehicleDetails.color}</p>
                                </div>
                                <div className="flex justify-start w-full">
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Insurance</h2>
                                    <p className='text-gray-500 text-sm w-[50%] '>{viewData.driverVehicleDetails.insurance === 1 ? "True" : "False"}</p>
                                </div>
                                <div className="flex  w-full">
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>No. of Seats</h2>
                                    <p className='text-gray-500 text-sm w-[50%] '>{viewData.driverVehicleDetails.numberOfSeat}</p>
                                </div>
                                <div className="flex  w-full">
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>PUC</h2>
                                    <p className='text-gray-500 text-sm w-[50%] '>{viewData.driverVehicleDetails.puc === 1 ? 'True' : "False"}</p>
                                </div>
                                <div className="flex  w-full">
                                    <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Car HealthCard</h2>
                                    <p className='text-gray-500 text-sm w-[50%] '>{viewData.driverVehicleDetails.carHealthCard === 1 ? "True" : "False"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 mt-2 flex">
                    <h1 className='font-semibold text-[#464650] w-[50%] text-[15px]'>Bank Details</h1>
                    <h1 className='font-semibold text-[#464650] w-[50%] px-4 text-[15px]'>Insurance  Details</h1>
                </div>
                <div className="flex mx-4 my-1 justify-between">
                    <div className="flex items-center justify-center w-[48%] rounded-lg bankDetail bg-[#f4f3fb]">
                        <div className="w-full my-1 p-4  flex flex-col items-center gap-2">
                            <div className="flex justify-start w-full">
                                <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Bank Name</h2>
                                <p className='text-gray-500 text-sm gap-2 w-[50%] '>HDFC</p>
                            </div>
                            <div className="flex  w-full">
                                <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Account No </h2>
                                <p className='text-gray-500 text-sm w-[50%] '>8789405465126</p>
                            </div>
                            <div className="flex  w-full">
                                <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Acc Holder Name </h2>
                                <p className='text-gray-500 text-sm w-[50%] '>{viewData.driverDetails.fullname}</p>
                            </div>
                            <div className="flex  w-full">
                                <h2 className='font-semibold text-[#464650] text-[15px] w-[50%]'>IFSC Code</h2>
                                <p className='text-gray-500 text-sm w-[50%] '>ABC1234567D5</p>
                            </div>
                            <div className="flex justify-start items-start w-full">
                                <h2 className='font-semibold text-[#464650] text-[15px] w-[50%]'>Branch</h2>
                                <p className='text-gray-500 text-sm w-[50%] '>Main Branch</p>
                            </div>
                            <div className="flex justify-start items-start w-full">
                                <h2 className='font-semibold text-[#464650] text-[15px] w-[50%]'>Registered</h2>
                                <p className='text-gray-500 text-sm w-[50%] '>79854620138</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[48%] rounded-lg bankDetail bg-[#f4f3fb]">
                        <div className="w-full my-1 p-4  flex flex-col items-center gap-2">
                            <div className="flex justify-start w-full">
                                <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Policy Holder</h2>
                                <p className='text-gray-500 text-sm gap-2 w-[50%] '>{viewData.driverDetails.fullname}</p>
                            </div>
                            <div className="flex  w-full">
                                <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Policy Number </h2>
                                <p className='text-gray-500 text-sm w-[50%] '>BI-123456789</p>
                            </div>
                            <div className="flex  w-full">
                                <h2 className='font-semibold text-[#464650] gap-2 text-[15px] w-[50%]'>Insurance Company</h2>
                                <p className='text-gray-500 text-sm w-[50%] '>BikeSure Insurance</p>
                            </div>
                            <div className="flex  w-full">
                                <h2 className='font-semibold text-[#464650] text-[15px] w-[50%]'>Policy Start Date</h2>
                                <p className='text-gray-500 text-sm w-[50%] '>January 1, 2024</p>
                            </div>
                            <div className="flex justify-start items-start w-full">
                                <h2 className='font-semibold text-[#464650] text-[15px] w-[50%]'>Policy End Date</h2>
                                <p className='text-gray-500 text-sm w-[50%] '>December 31, 2024</p>
                            </div>
                            <div className="flex justify-start items-start w-full">
                                <h2 className='font-semibold text-[#464650] text-[15px] w-[50%]'>Bike Registration Number</h2>
                                <p className='text-gray-500 text-sm w-[50%] '>RJ14 CD 5678</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails


