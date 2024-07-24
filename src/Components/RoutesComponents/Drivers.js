import React, { useEffect, useRef, useState } from 'react'
import Heading from '../smallComponents/Heading'
import { CiSearch } from "react-icons/ci";
import * as XLSX from 'xlsx';
import { useDispatch, useSelector } from 'react-redux';
import DriverForm from '../Forms/DriverForm';
import { FaRegEdit } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import DrillDown from './DrillDown';
import { LuHistory } from "react-icons/lu";
import DriverDetails from '../Forms/DriverDetails';
import reducerFunction from '../../features/extraReducersFunction';
import userImg from '../../assets/Image/User.jpg'
import EditDriver from '../Forms/EditDriver';
import { ImBlocked } from "react-icons/im";
import Loader from '../smallComponents/Loader';
import { recieveData } from '../../features/panelSlice';
// import { CgUnblock } from "react-icons/cg";

const Drivers = () => {
  const { getAllDriver, RecieveData, isLoading, isError, isSucces } = useSelector((state) => state.panelSlice);
  const downloadExcel = (data, filename) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, filename);
  };

  const dispatch = useDispatch();
  const [ID, setID] = useState(null);
  const [searchTxt, setSearchTxt] = useState('');
  const [showList, setShowList] = useState(10)
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [driverList, setDriverList] = useState([]);
  const [drill, setDrill] = useState({ check: false, id: "" });
  const [details, setDetails] = useState({ check: false, item: {} });
  const [formData, setFormData] = useState({ check: false, item: {} });
  const [showHideRequest, setShowHideRequest] = useState(true);
  const searchFunc = (e) => {
    setSearchTxt(e.target.value.toLowerCase());
  }

  // const handleDownloadClick = () => {
  //   downloadExcel(getAllDriver, 'driverList.xlsx');
  // };

  const start = 1;
  const end = Math.ceil(getAllDriver.length / showList);
  const pageArray = Array.from(Array(end - start + 1).keys()).map((index) => index + start);

  useEffect(() => {
    if (searchTxt.length !== 0) {
      setDriverList(getAllDriver.filter((item, index) => String(item.driverDetails.fullname).toLowerCase().includes(searchTxt) || String(item.driverDetails.phone).toLowerCase().includes(searchTxt) || String(item.driverDetails.email).toLowerCase().includes(searchTxt) || String(item.driverDetails.address).toLowerCase().includes(searchTxt)))
    }
    else {
      const startIndex = (page - 1) * showList;
      const endIndex = startIndex + showList;
      const newList = getAllDriver.slice(startIndex, endIndex);
      setDriverList(newList);
    }
  }, [searchTxt]);

  const increase = () => {
    if (showList !== 100) {
      setShowList(showList + 5)
    }
  }

  const decrease = () => {
    if (10 !== showList) {
      setShowList(showList - 5)
    }
  }


  useEffect(() => {
    const startIndex = (page - 1) * showList;
    const endIndex = startIndex + showList;
    const newList = getAllDriver.slice(startIndex, endIndex);
    setDriverList(newList);
    if (RecieveData.length === 0) {
      setShowHideRequest(false)
    }

    if (page !== 1) {
      pageArray.includes(page) ? setPage(page) : setPage(pageArray[pageArray.length - 1]);
    }
    if (getAllDriver.length === 0) {
      dispatch(reducerFunction.getAllDriver())
    }
    if (getAllDriver.length !== 0) {
      dispatch(recieveData(getAllDriver))
    }
  }, [page, getAllDriver, showList]);


  const closeDrill = () => {
    setDrill({ ...drill, check: false })
  }

  const showHideRequestFunc = (take) => {
    setShowHideRequest(take)
  }

  const showHideViewFuncView = (take) => {
    setDetails({ check: take, item: {} })
  }

  const showHideViewFuncEdit = (take) => {
    setFormData({ check: take, item: {} })
  }




  return (
    isLoading ? <Loader /> :
      <>
        <div className='mt-[37px]  ml-[25px] bg-[#f4f3fb]'>
          <div className={`header flex justify-between items-center sticky top-[37px] z-10 bg-[#f4f3fb]  ${(showHideRequest || details.check || formData.check) && 'opacity-[0.5] pointer-events-none'} `}>
            <div className="entries flex justify-center items-center gap-2 h-[50px]">
              <p>Show </p><div className="value flex justify-center gap-3 items-center bg-[#e9e9e9] border-[2px] border-gray-400 rounded-xl h-[80%] p-2  ">{showList}<span className='flex flex-col justify-center items-center gap-1'>
                <button onClick={decrease} className='text-white text-[8px] px-[1px] bg-[#8c7fe6]'>&#9650;</button> <button onClick={increase} className='text-white text-[8px] px-[1px] bg-[#8c7fe6]'>&#9660;</button></span></div><p>entries</p>
            </div>
            <input type="input" className='py-2 px-4 bg-[#e9e9e9] mr-10 rounded-2xl border-[2px] border-gray-500' id='search' placeholder='search ...' value={searchTxt} onChange={(e) => searchFunc(e)} />
          </div>
          {RecieveData.length > 0 && showHideRequest && <div key={RecieveData[0].id} className="opacity-[1] relative top-[8px]">
            <DriverForm key={RecieveData[0].id} driverData={RecieveData[0]} showHideRequestFunc={showHideRequestFunc} />
          </div>}
          {details.check && <div className=" opacity-[1] relative top-[8px]">
            <DriverDetails viewData={details.item} showHideViewFuncView={showHideViewFuncView} />
          </div>}
          {formData.check && <div className=" opacity-[1] relative top-[8px]">
            <EditDriver editData={formData.item} showHideViewFuncEdit={showHideViewFuncEdit} />
          </div>}
          <div className={`data mt-2 flex flex-col gap-1 h-[580px] overflow-y-auto  ${(showHideRequest || details.check || formData.check) && 'opacity-[0.5] pointer-events-none'} `}>
            <div className="headers bg-[#8c7fe6] py-2 text-white rounded-lg flex justify-around border-2 border-transparent sticky top-0 z-10 ">
              <span className="w-[25px] text-center">S.No</span>
              <span>|</span>
              <div className='w-[150px]'>Full Name</div>
              <span>|</span>
              <div className='w-[110px]'>Phone</div>
              <span>|</span>
              <div className='w-[210px]'>Address</div>
              <span>|</span>
              <div className='w-[210px]'>Email</div>
              <span>|</span>
              <div className='w-[120px]'>Status</div>
              <span>|</span>
              <div className='w-[130px]'>Action</div>
            </div>
            {driverList.map((item, index) => <div key={index}>
              <div className="dataList bg-white py-2 rounded-lg flex justify-around">
                <span className="w-[25px] text-center">{searchTxt.length > 0 ? index + 1 : (index + 1) + (page - 1) * showList}</span>
                <span>|</span>
                <div className='w-[150px] flex justify-start gap-2'>
                  <img src={item.driverDetails.profileImage ? process.env.REACT_APP_BASE_URL + item.driverDetails.profileImage || `http://157.245.102.51:3002/${item.driverDetails.profileImage}` : userImg} className='h-[25px] w-[25px] rounded-lg' />
                  <p className='truncate'>{item.driverDetails.fullname}</p>
                </div>
                <span>|</span>
                <div className='w-[110px]'>{item.driverDetails.phone}</div>
                <span>|</span>
                <div className='w-[210px]'>{item.driverDetails.address}</div>
                <span>|</span>
                <div className='w-[210px]'>{item.driverDetails.email}</div>
                <span>|</span>
                <button className={`w-[120px] rounded-xl text-sm p-1 ${item.driverDetails.active === 1 ? 'bg-[#7ec067]' : item.driverDetails.active === 0 ? 'bg-[#e98b8b]' : 'bg-[#f8e321]'}`}>{item.driverDetails.active === 1 ? "Approved" : item.driverDetails.active === 0 ? "Rejected" : "Pending"}</button>
                <span>|</span>
                <div className='w-[130px] flex justify-around items-center text-[#8c7fe6] actions'> <div title='View' onClick={() => setDetails({ check: !details.check, item: item })} ><FiEye /></div> <div title='History' onClick={() => setDrill({ check: !drill.check, id: item.driverDetails._id })}><LuHistory /></div>  <div title='Edit' onClick={() => setFormData({ check: !details.check, item: item })}><FaRegEdit /></div> <div title='Delete'><FaTrash /></div> <div title='Block'><ImBlocked /></div> </div>
              </div >
              {drill.check && item.driverDetails._id === drill.id && <DrillDown closeDrill={closeDrill} driverId={item.driverDetails._id} />}
            </div>)
            }
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={1}
            navigation={true}
            modules={[Navigation]}
            className={`mySwiper w-[250px]  float-end  pagination ${(showHideRequest || details.check || formData.check) && 'opacity-[0.5] pointer-events-none'}`}
          >
            {pageArray.map((item, index) => <SwiperSlide key={index} ><li onClick={() => {
              setPage(item);
              setSearchTxt("");
            }} className={` ${item === page && 'bg-[#8c7fe6] text-white'}  w-[20px] h-[20px] rounded-md`}>{item}</li></SwiperSlide>)}
          </Swiper>
        </div >
      </>

  )
}

export default Drivers




/*---------------- Search Data --------*/
// : searchData.map((item, index) => <div key={index} className="dataList bg-white py-2 rounded-lg flex justify-around">
//           <span className="w-[25px] text-center">{item.id}</span>
//           <span>|</span>
//           <div className='w-[150px]'>{item.driverName}</div>
//           <span>|</span>
//           <div className='w-[150px]'>{item.phone}</div>
//           <span>|</span>
//           <div className='w-[200px]'>{item.address}</div>
//           <span>|</span>
//           <div className='w-[200px]'>{item.email}</div>
//           <span>|</span>
//           <button className={`w-[120px] rounded-xl text-sm p-1 ${item.status === "Approved" ? 'bg-[#7ec067]' : item.status === "Rejected" ? 'bg-[#e98b8b]' : 'bg-[#f8e321]'}`}>{item.status}</button>
//           <span>|</span>
//           <div className='w-[120px] flex justify-around items-center text-[#8c7fe6]'><FiEye /> <FaRegEdit /> <FaTrash /> </div>
//         </div>)
// <div>
//   <div className="flex">
//     <div className='w-full h-[100px] flex items-center justify-between px-10'>
//       <Heading headingText={"Driver List"} />
//       <span className='flex justify-center items-center gap-2'>
//         <input className='border-2 cursor-pointer searchDriverList rounded-sm ' value={searchTxt} onChange={(e) => searchFunc(e)} type="search" />
//         {/* <button onClick={handleDownloadClick} className='py-2 px-6 rounded-xl border-2 hover:bg-[#c6d0ff] hover:text-black border-black bg-[#798ad5] active:bg-transparent text-white' type='button'>Excel Download</button> */}
//       </span>
//     </div>
//   </div>
// {RecieveData.length > 0 && <div className="sticky top-[110px]">
//   <DriverForm driverData={RecieveData[0]} />
// </div>}
//   <div className="driverList w-[94%] m-auto">
//     <table>
//       <thead>
//         <tr>
//           <th>S.No</th>
//           <th>Driver Name</th>
//           <th>Phone #</th>
//           {/* <th>Email ID</th> */}
//           {/* <th>Address</th> */}
//           {/* <th>Vehical Type</th> */}
//           {/* <th>Make</th>
//           <th>Model</th> */}
//           {/* <th>Color</th> */}
//           {/* <th>Seats</th> */}
//           <th>Number</th>
//           <th>Licence</th>
//           <th>Insurance</th>
//           <th>Status</th>
//           <th>Active</th>
//         </tr>
//       </thead>
//       <tbody>
//         {/* {
//           getAllDriver && getAllDriver.map((item, index) =>
//             <tr key={index} onMouseOver={runMarquee} onMouseOut={stopMarquee}>
//               <td >{index + 1}</td>
//               <td >{item.driverName.length > 5 && ID === item.driverName ? <><marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left"><span className='flex'><img src={item.image} alt={item.driverName + " Img"} width="25" height="25" /> <p>{item.driverName}</p></span></marquee> </> : <span className='flex'><img src={item.image} alt={item.driverName + " Img"} width="25" height="25" /><p>{item.driverName}</p></span>}</td>
//               <td > {item.phone.length > 6 && ID === item.phone ? <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left">{item.phone}</marquee> : <p>{item.phone}</p>}</td> */}
//         {/* <td >{item.email.length > 6 && ID === item.email ? <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left">{item.email}</marquee> : <p>{item.email}</p>}</td> */}
//         {/* <td >{item.address.length > 6 && ID === item.address ? <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left">{item.address}</marquee> : <p>{item.address}</p>}</td> */}
//         {/* <td >{item.vehicalType.length > 6 && ID === item.vehicalType ? <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left"><p>{item.vehicalType}</p></marquee> : <p>{item.vehicalType}</p>}</td> */}
//         {/* <td >{item.make.length > 6 && ID === item.make ? <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left"><p>{item.make}</p></marquee> : <p>{item.make}</p>}</td> */}
//         {/* <td >{item.model.length > 6 && ID === item.model ? <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left">{item.model}</marquee> : <p>{item.model}</p>}</td> */}
//         {/* <td >{item.color.length > 6 && ID === item.color ? <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left">{item.color}</marquee> : <p>{item.color}</p>}</td> */}
//         {/* <td >{item.seats.length > 6 && ID === item.seats ? <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left">{item.seats}</marquee> : <p>{item.seats}</p>}</td> */}
//         {/* <td>{item.number.length > 6 && ID === item.number ? <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left">{item.number}</marquee> : <p>{item.number}</p>}</td>
//               <td>{item.licence.length > 6 && ID === item.licence ? <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left">{item.licence}</marquee> : <p>{item.licence}</p>}</td> */}
//         {/* <td>{item.insurance.length > 6 && ID === item.insurance ? <marquee behavior="scroll" scrolldelay="1" scrollamount="2" direction="left">{item.insurance}</marquee> : <p>{item.insurance}</p>}</td> */}
//         {/* <button>Edit</button>
//                 <button>Delete</button>
//               </td>
//             </tr>
//           )
//         } */}
//         {searchData.length > 0 ? searchData.map((item, index) => <tr key={index}>
//           <td>{index + 1}</td>
//           <td>{item.driverName}</td>
//           <td>{item.phone}</td>
//           <td>{item.number}</td>
//           <td>{item.licence}</td>
//           <td><span className='flex'><FaRegEdit /><FaRegEdit /><FaRegEdit /><FaRegEdit /></span></td>
//         </tr>) : getAllDriver.map((item, index) => <tr key={index}>
//           <td>{index + 1}</td>
//           <td>{item.driverName}</td>
//           <td>{item.phone}</td>
//           <td>{item.number}</td>
//           <td>{item.licence}</td>
//           <td><span className='flex'><FaRegEdit /><FaRegEdit /><FaRegEdit /><FaRegEdit /></span></td>
//         </tr>)
//         }
//       </tbody>
//     </table>

//   </div >
// </div >