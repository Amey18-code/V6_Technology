import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { CiLight } from 'react-icons/ci';
import { useDispatch } from 'react-redux';

const EditDriver = ({ editData, showHideViewFuncEdit }) => {
    const { driverDetails, driverBankDetails, driverVehicleDetails } = editData
    const [btnText, setBtnText] = useState('Basic');
    // const [formData, setFormData] = useState({
    // aadharCard: "",
    // active: "",
    // address: "",
    // carHealthCard: "",
    // city: "",
    // color: "",
    // createdAt: "",
    // driverId: "",
    // drivingLicense: "",
    // email: "",
    // fcmToken: "",
    // fullname: "",
    // insurance: "",
    // lat: "",
    // long: "",
    // make: "",
    // model: "",
    // numberOfSeat: "",
    // numberPlate: "",
    // otp: "",
    // otpCreatedAt: ,
    // ownerReferCode: "",
    // password: "",
    // phone: "",
    // postalCode: "",
    // puc: "",
    // registrationNumber: "",
    // type: "",
    // updatedAt: "",
    // __v: "",
    // _id: ""
    // });
    // const [formData, setFormData] = useState({ ...driverDetails, ...driverBankDetails, ...driverVehicleDetails });
    const [formData, setFormData] = useState({ ...driverDetails, ...driverVehicleDetails });
    const [selectedImage, setSelectedImage] = useState({
        aadharCard: null,
        drivingLicense: null,

    });

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
            // {
            // aadharCard: "",
            // active: "",
            // address: "",
            // carHealthCard: "",
            // city: "",
            // color: "",
            // createdAt: "",
            // driverId: "",
            // drivingLicense: "",
            // email: "",
            // fcmToken: "",
            // fullname: "",
            // insurance: "",
            // lat: "",
            // long: "",
            // make: "",
            // model: "",
            // numberOfSeat: "",
            // numberPlate: "",
            // otp: "",
            // otpCreatedAt: ,
            // ownerReferCode: "",
            // password: "",
            // phone: "",
            // postalCode: "",
            // puc: "",
            // registrationNumber: "",
            // type: "",
            // __v: "",
            // _id: ""
            //     })
        }
        // else {
        //     alert('Please fill in all required fields.');
        // }
    };




    useEffect(() => {
        // setFormData({ ...driverDetails, ...driverBankDetails, ...driverVehicleDetails })
        setFormData({ ...driverDetails, ...driverVehicleDetails })
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage({ ...selectedImage, [e.target.name]: URL.createObjectURL(file) });
        }
    };

    const handleFormChange = (btnSelect) => {
        setBtnText(btnSelect);
    }

    const upDateForm = () => {
        console.log(formData,"form datas");
    }

    return (
        <>
            <div className="">
                <div className=" w-[800px] p-4 min-h-[550px] m-auto bg-white absolute right-[20%] top-[-25px] rounded-xl driverForm z-20">
                    <h1 className='font-semibold text-[#464650] text-[15px]'>Edit :- {formData?.fullname} </h1>
                    <p onClick={() => showHideViewFuncEdit(false)} className='relative top-[20px] cursor-pointer float-end right-[30px] hover:bg-red-300 z-10 transform rotate-45 text-2xl p-1 bg-[#8C7FE6] rounded-2xl text-[#E02121]'><AiOutlinePlus /></p>
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
                    <hr className='w-[420px]   ml-[158px] h-[3px] border-[#8C7FE6] bg-[#8C7FE6]' />
                    <form onSubmit={handleSubmit}>
                        {btnText === "Basic" ? <> <div className="BasicDetails flex flex-col justify-center items-center my-8 gap-4">
                            <div className="flex w-[70%]">
                                <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="fullname">Driver Name :</label>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    value={formData?.fullname ? formData?.fullname : ""}
                                    onChange={handleChange}
                                    required
                                    placeholder="Driver Name"
                                />
                            </div>
                            <div className="flex w-[70%]">
                                <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="phone">Phone # :</label>
                                <input
                                    type="text"
                                    id='phone'
                                    name="phone"
                                    value={formData?.phone ? formData?.phone : ""}
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
                                    value={formData?.address ? formData?.address : ""}
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
                                    value={formData?.email ? formData?.email : ""}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email ID"
                                />
                            </div>
                            <span className='flex justify-center items-center'>
                                <div className="flex flex-col justify-center items-center w-full fileDiv">
                                    <label className='w-full flex justify-center items-center' htmlFor='AadharCard'> {selectedImage.aadharCard && formData?.aadharCard ? <img src={selectedImage.aadharCard} alt="AadharCard" /> : formData?.aadharCard ? <img src={process.env.REACT_APP_BASE_URL + formData?.aadharCard} alt="AadharCard" /> : <div className='w-[70%]  h-[120px] flex justify-center items-center border-2 rounded-lg'><h2>Aadhar Card</h2></div>}</label>
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
                                    <label className='w-full flex justify-center items-center' htmlFor="drivingLicense"> {selectedImage.drivingLicense && formData?.drivingLicense ? <img src={selectedImage.drivingLicense} alt="drivingLicense" /> : formData?.drivingLicense ? <img src={process.env.REACT_APP_BASE_URL + formData?.drivingLicense} alt="AadharCard" /> : <div className='w-[70%]  h-[120px] flex justify-center items-center border-2 rounded-lg'><h2>Driving Licence</h2></div>}</label>
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
                                            value={formData?.type ? formData?.type : ""}
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
                                            value={formData?.make ? formData?.make : ""}
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
                                            value={formData?.model ? formData?.model : ""}
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
                                            value={formData?.color ? formData?.color : ""}
                                            onChange={handleChange}
                                            required
                                            placeholder="Color"
                                        />
                                    </div>
                                    <div className="flex w-[70%]">
                                        <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="seats">Seats :</label>
                                        <input
                                            type="Number"
                                            name="seats"
                                            id="seats"
                                            value={formData?.numberOfSeat ? formData?.numberOfSeat : ""}
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
                                            value={formData?.numberPlate ? formData?.numberPlate : ""}
                                            onChange={handleChange}
                                            required
                                            placeholder="Number Plate"
                                        />
                                    </div>
                                    <div className="flex w-[70%]">
                                        <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="registrationNo">Registration No :</label>
                                        <input
                                            type="text"
                                            name="registrationNo"
                                            id="registrationNo"
                                            value={formData?.registrationNumber ? formData?.registrationNumber : ""}
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
                                        value={formData?.puc ? formData?.puc : ""}
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
                                        value={formData?.insurance ? formData?.insurance : ""}
                                        onChange={handleChange}
                                        required
                                        placeholder="Insurance No"
                                    />
                                </div>
                                <div className="flex w-[70%]">
                                    <label className='w-[25%] bg-[#8C7FE6] flex items-center pl-3 rounded-l-lg text-white' htmlFor="carHealthCard">Health Card No :</label>
                                    <input
                                        type="text"
                                        name="carHealthCard"
                                        id="carHealthCard"
                                        value={formData?.carHealthCard ? formData?.carHealthCard : ""}
                                        onChange={handleChange}
                                        required
                                        placeholder="Car Health Card No."
                                    />
                                </div>

                            </div>
                                <div className="w-full flex justify-center items-center my-10 gap-3">
                                    <button
                                        className='py-2 px-10 rounded-3xl border-2 hover:bg-[#8ab67d] hover:text-black  bg-[#56874A] active:bg-transparent text-white'
                                        type='button'
                                        onClick={() => upDateForm()}
                                    >
                                        Update Form
                                    </button>
                                    {/* <button
                                        className='py-2 px-10 rounded-3xl border-2 hover:bg-[#8ab67d] hover:text-black bg-[#56874A] active:bg-transparent text-white'
                                        type='submit'
                                        onClick={() => dispatch(approve({ id: formData?.id, satus: true }))}
                                    >
                                        Approve Request
                                    </button> */}
                                </div> </>}
                    </form>
                </div >
            </div>
        </>
    )
}

export default EditDriver