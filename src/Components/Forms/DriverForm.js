import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { approve } from '../../features/panelSlice';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DriverForm = ({ driverData, showHideRequestFunc }) => {

    const [btnText, setBtnText] = useState('Basic');
    // const [formData, setFormData] = useState({
    //     driverName: '',
    //     phoneNumber: '',
    //     email: '',
    //     address: '',
    //     aadharCard: null,
    //     drivingLicense: null,
    //     carType: '',
    //     make: '',
    //     model: '',
    //     color: '',
    //     seats: '',
    //     numberPlate: '',
    //     registrationNo: '',
    //     pucNo: '',
    //     insuranceNo: '',
    //     healthCardNo: ''
    // });

    const [formData, setFormData] = useState({ ...driverData.driverDetails, ...driverData.driverBankDetails, ...driverData.driverVehicleDetails });
    const [selectedImage, setSelectedImage] = useState({
        aadharCard: null,
        drivingLicense: null,
    });
    console.log(formData, "formData");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'aadharCard' || name === 'drivingLicense' ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormFilled = Object.values(formData).every((value) => value !== '' && value !== null);
        if (isFormFilled) {
            console.log('Form submitted:', formData);
            // setFormData(
            //     {
            //         fullname: '',
            //         phone: '',
            //         email: '',
            //         address: '',
            //         aadharCard: null,
            //         drivingLicense: null,
            //         type: '',
            //         make: '',
            //         model: '',
            //         color: '',
            //         numberOfSeat: '',
            //         numberPlate: '',
            //         registrationNumber: '',
            //         pucNo: '',
            //         insuranceNo: '',
            //         healthCardNo: ''
            //     })
        }
        // else {
        //     alert('Please fill in all required fields.');
        // }
    };

    // useEffect(() => {
    //     AOS.init();
    // }, []);


    const upDateForm = (data) => {
        console.log(data.formData)
    }
    useEffect(() => {
        setFormData({ ...driverData.driverDetails, ...driverData.driverBankDetails, ...driverData.driverVehicleDetails })
    }, [driverData]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage({ ...selectedImage, [e.target.name]: URL.createObjectURL(file) });
        }
    };

    const handleFormChange = (btnSelect) => {
        setBtnText(btnSelect);
    }



    return (
        <>
            <div className=" w-[800px] min-h-[550px] m-auto bg-white absolute right-[20%] top-[-25px] rounded-xl driverForm z-20">
                <p onClick={() => showHideRequestFunc(false)} className='relative top-[20px] cursor-pointer float-end right-[30px] hover:bg-red-300 z-10 transform rotate-45 text-2xl p-1 bg-[#8C7FE6] rounded-2xl text-[#E02121]'><AiOutlinePlus /></p>
                <div className="flex w-[420px] m-auto justify-between mt-3">
                    <button
                        onClick={() => handleFormChange("Basic")}
                        type='button'
                        className={`w-[150px]   h-[45px] rounded-t-lg  ${btnText === 'Basic' ? 'hover:bg-[#8C7FE6] text-white' : 'hover:bg-[#e1e6fa]'} ${btnText === 'Basic' && 'bg-[#8C7FE6] text-white '}`}
                    >
                        Basic Details
                    </button>
                    <button
                        onClick={() => handleFormChange("VehicalD")}
                        type='button'
                        className={`w-[150px]   h-[45px] rounded-t-lg  ${btnText === 'VehicalD' ? 'hover:bg-[#8C7FE6] text-white' : 'hover:bg-[#e1e6fa]'}  ${btnText === 'VehicalD' && 'bg-[#8C7FE6]'}`}
                    >
                        Vehical  Details
                    </button>
                    <button
                        onClick={() => handleFormChange("VehicalH")}
                        type='button'
                        className={`w-[150px]   h-[45px] rounded-t-lg  ${btnText === 'VehicalH' ? 'hover:bg-[#8C7FE6] text-white' : 'hover:bg-[#e1e6fa]'}  ${btnText === 'VehicalH' && 'bg-[#8C7FE6]'}`}
                    >
                        Vehical Health
                    </button>
                </div>
                <hr className='w-[420px]   ml-[174px] h-[3px] border-[#8C7FE6] bg-[#8C7FE6]' />
                <form onSubmit={handleSubmit}>
                    {btnText === "Basic" ? <> <div className="BasicDetails flex flex-col justify-center items-center my-8 gap-4">
                        <div className="flex w-[70%]">
                            <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="fullname">Driver Name :</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                required
                                placeholder="Driver Name"
                            />
                        </div>
                        <div className="flex w-[70%]">
                            <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="phoneNumber">Phone # :</label>
                            <input
                                type="text"
                                id='phone'
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="flex w-[70%]">
                            <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="address">Address :</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                placeholder="Address"
                            />
                        </div>
                        <div className="flex w-[70%]">
                            <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="phoneNumber">E-mail :</label>
                            <input
                                type="email"
                                name="email"
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email ID"
                            />
                        </div>
                        <span className='flex justify-center items-center'>
                            <div className="flex flex-col justify-center items-center w-full fileDiv">
                                <label className='w-full flex justify-center items-center' htmlFor='AadharCard'> {selectedImage.aadharCard && formData.aadharCard ? <img src={selectedImage.aadharCard} alt="AadharCard" /> : <div className='w-[70%]  h-[120px] flex justify-center items-center border-2 rounded-lg'><h2>Aadhar Card</h2></div>}</label>
                                <input type="file"
                                    id='AadharCard'
                                    name="aadharCard"
                                    onChange={(e) => {
                                        handleImageChange(e)
                                        handleChange(e)
                                    }}
                                    placeholder="Aadhar Card"
                                    accept="image/*"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center w-full fileDiv">
                                <label className='w-full flex justify-center items-center' htmlFor="drivingLicense"> {selectedImage.drivingLicense && formData.drivingLicense ? <img src={selectedImage.drivingLicense} alt="drivingLicense" /> : <div className='w-[70%]  h-[120px] flex justify-center items-center border-2 rounded-lg'><h2>Driving Licence</h2></div>}</label>
                                <input type="file"
                                    id='drivingLicense'
                                    name="drivingLicense"
                                    onChange={(e) => {
                                        handleImageChange(e)
                                        handleChange(e)
                                    }}
                                    placeholder="Driving Licence"
                                    accept="image/*"
                                />
                            </div>
                        </span>
                    </div>
                        <div className="w-full flex justify-center items-center my-4">
                            <button onClick={() => handleFormChange("VehicalD")}
                                className='py-2 px-10 rounded-3xl border-2 hover:bg-[#c6d0ff] hover:text-black  bg-[#8C7FE6] active:bg-transparent text-white'
                                type='button'
                            >
                                Next
                            </button></div></> : btnText === "VehicalD" ? <><div className="BasicDetails flex flex-col justify-center items-center my-8 gap-4">

                                <div className="flex w-[70%]">
                                    <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="type">Car Type :</label>
                                    <input
                                        type="text"
                                        name="type"
                                        id="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        required
                                        placeholder="Car Type"
                                    />
                                </div>
                                <div className="flex w-[70%]">
                                    <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="make">Make :</label>
                                    <input
                                        type="text"
                                        name="make"
                                        id="make"
                                        value={formData.make}
                                        onChange={handleChange}
                                        required
                                        placeholder="Make"
                                    />
                                </div>
                                <div className="flex w-[70%]">
                                    <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="model">Modal :</label>
                                    <input
                                        type="text"
                                        name="model"
                                        id="model"
                                        value={formData.model}
                                        onChange={handleChange}
                                        required
                                        placeholder="Model"
                                    />
                                </div>
                                <div className="flex w-[70%]">
                                    <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="color">Color :</label>
                                    <input
                                        type="text"
                                        name="color"
                                        id="color"
                                        value={formData.color}
                                        onChange={handleChange}
                                        required
                                        placeholder="Color"
                                    />
                                </div>
                                <div className="flex w-[70%]">
                                    <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="numberOfSeat">Seats :</label>
                                    <input
                                        type="Number"
                                        name="numberOfSeat"
                                        id="numberOfSeat"
                                        value={formData.numberOfSeat}
                                        onChange={handleChange}
                                        required
                                        placeholder="No. Of Seats"
                                    />
                                </div>
                                <div className="flex w-[70%]">
                                    <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="numberPlate">Number Plate :</label>
                                    <input
                                        type="text"
                                        name="numberPlate"
                                        id="numberPlate"
                                        value={formData.numberPlate}
                                        onChange={handleChange}
                                        required
                                        placeholder="Number Plate"
                                    />
                                </div>
                                <div className="flex w-[70%]">
                                    <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="registrationNumber">Registration No :</label>
                                    <input
                                        type="text"
                                        name="registrationNumber"
                                        id="registrationNumber"
                                        value={formData.registrationNumber}
                                        onChange={handleChange}
                                        required
                                        placeholder="Registration No."
                                    />
                                </div>

                            </div>
                                <div className="w-full flex justify-center items-center my-4">
                                    <button onClick={() => handleFormChange("VehicalH")}
                                        className='py-2 px-10 rounded-3xl border-2 hover:bg-[#c6d0ff] hover:text-black  bg-[#8C7FE6] active:bg-transparent text-white'
                                        type='button'
                                    >
                                        Next
                                    </button></div> </>
                        : <><div className="BasicDetails flex flex-col justify-center items-center gap-4 my-8">
                            <div className="flex w-[70%]">
                                <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="puc">PUC No :</label>
                                <input
                                    type="text"
                                    name="puc"
                                    id="puc"
                                    value={formData.puc}
                                    onChange={handleChange}
                                    required
                                    placeholder="PUC No."
                                />
                            </div>
                            <div className="flex w-[70%]">
                                <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="insurance">Insurance No :</label>
                                <input
                                    type="text"
                                    name="insurance"
                                    id="insurance"
                                    value={formData.insurance}
                                    onChange={handleChange}
                                    required
                                    placeholder="Insurance No"
                                />
                            </div>
                            <div className="flex w-[70%]">
                                <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="carHealthCard">HealthCard No :</label>
                                <input
                                    type="text"
                                    name="carHealthCard"
                                    id="carHealthCard"
                                    value={formData.carHealthCard}
                                    onChange={handleChange}
                                    required
                                    placeholder="Health Card No."
                                />
                            </div>

                        </div>
                            <div className="w-full flex justify-center items-center my-10 gap-3">
                                <button
                                    className='py-2 px-10 rounded-3xl border-2 hover:bg-red-500 hover:text-black  bg-[#D42424] active:bg-transparent text-white'
                                    type='button'
                                    onClick={() => upDateForm({ formData, status: 0 })}
                                >
                                    Reject Request
                                </button>
                                <button
                                    className='py-2 px-10 rounded-3xl border-2 hover:bg-[#8ab67d] hover:text-black bg-[#56874A] active:bg-transparent text-white'
                                    type='submit'
                                    onClick={() => upDateForm({ formData, status: 1 })}
                                >
                                    Approve Request
                                </button></div> </>}
                </form>
            </div >
        </>
    )
}

export default DriverForm
