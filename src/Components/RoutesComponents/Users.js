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
import { ImBlocked } from "react-icons/im";
import Loader from '../smallComponents/Loader';
// import { CgUnblock } from "react-icons/cg";

const Users = () => {
  const { getAllUsers, RecieveData, isLoading } = useSelector((state) => state.panelSlice);
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
  const [details, setDetails] = useState({ check: false, id: "" });
  const [showHideRequest, setShowHideRequest] = useState(true);
  const searchFunc = (e) => {
    setSearchTxt(e.target.value.toLowerCase());
  }
  // const handleDownloadClick = () => {
  //   downloadExcel(getAllUsers, 'driverList.xlsx');
  // };


  useEffect(() => {
    if (searchTxt.length !== 0) {
      setDriverList(getAllUsers.filter((item, index) => String(item.fullname).toLowerCase().includes(searchTxt) || String(item.phone).toLowerCase().includes(searchTxt) || String(item.email).toLowerCase().includes(searchTxt) || String(item.address).toLowerCase().includes(searchTxt)))
    } else {
      const startIndex = (page - 1) * showList;
      const endIndex = startIndex + showList;
      const newList = getAllUsers.slice(startIndex, endIndex);
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

  const start = 1;
  const end = Math.ceil(getAllUsers.length / showList);
  const pageArray = Array.from(Array(end - start + 1).keys()).map((index) => index + start);

  useEffect(() => {
    if (getAllUsers.length === 0) {
      dispatch(reducerFunction.getAllUsers())
    }
    const startIndex = (page - 1) * showList;
    const endIndex = startIndex + showList;
    const newList = getAllUsers.slice(startIndex, endIndex);
    setDriverList(newList);
    if (RecieveData.length === 0) {
      setShowHideRequest(false)
    }

    if (page !== 1) {
      pageArray.includes(page) ? setPage(page) : setPage(pageArray[pageArray.length - 1]);
    }


  }, [page, getAllUsers, showList, RecieveData]);

  const closeDrill = () => {
    setDrill({ ...drill, check: false })
  }

  const showHideRequestFunc = (take) => {
    setShowHideRequest(take)
  }

  const showHideViewFunc = (take) => {
    setDetails({ check: take, id: "" })
  }
  return (
    isLoading ? <Loader /> :
      <>
        <div className='mt-[37px]  ml-[25px] bg-[#f4f3fb]'>
          <div className={`header flex justify-between items-center sticky top-[37px] z-10 bg-[#f4f3fb]  ${(details.check) && 'opacity-[0.5] pointer-events-none'} `}>
            <div className="entries flex justify-center items-center gap-2 h-[50px]">
              <p>Show </p><div className="value flex justify-center gap-3 items-center bg-[#e9e9e9] border-[2px] border-gray-400 rounded-xl h-[80%] p-2  ">{showList}<span className='flex flex-col justify-center items-center gap-1'>
                <button onClick={decrease} className='text-white text-[8px] px-[1px] bg-[#8c7fe6]'>&#9650;</button> <button onClick={increase} className='text-white text-[8px] px-[1px] bg-[#8c7fe6]'>&#9660;</button></span></div><p>entries</p>
            </div>
            <input type="input" className='py-2 px-4 bg-[#e9e9e9] mr-10 rounded-2xl border-[2px] border-gray-500' id='search' placeholder='search ...' value={searchTxt} onChange={(e) => searchFunc(e)} />
          </div>
          {/* {RecieveData.length > 0 && showHideRequest && <div key={RecieveData[0].id} className="opacity-[1] relative top-[8px]">
          <DriverForm key={RecieveData[0].id} driverData={RecieveData[0]} showHideRequestFunc={showHideRequestFunc} />
        </div>} */}
          {details.check && <div className=" opacity-[1] relative top-[8px]">
            <DriverDetails showHideViewFunc={showHideViewFunc} />
          </div>}
          <div className={`data mt-2 flex flex-col gap-1 h-[580px] overflow-y-auto  ${(details.check) && 'opacity-[0.5] pointer-events-none'} `}>
            <div className="headers bg-[#8c7fe6] py-2 text-white rounded-lg flex justify-around border-2 border-transparent sticky top-0 z-10 ">
              <span className="w-[25px] text-center">S.No</span>
              <span>|</span>
              <div className='w-[150px]'>Full Name</div>
              <span>|</span>
              <div className='w-[120px]'>Phone</div>
              <span>|</span>
              <div className='w-[210px]'>Address</div>
              <span>|</span>
              <div className='w-[210px]'>Email</div>
              <span>|</span>
              <div className='w-[120px]'>Status</div>
              <span>|</span>
              <div className='w-[120px]'>Action</div>
            </div>
            {driverList.length > 0 && driverList.map((item, index) => <div key={index}>
              <div key={index} className="dataList bg-white py-2 rounded-lg flex justify-around">
                <span className="w-[25px] text-center">{(index + 1) + (page - 1) * showList}</span>
                <span>|</span>
                <div className='w-[150px] flex gap-2'><img src={item.profileImage ? process.env.REACT_APP_BASE_URL + item.profileImage || `http://157.245.102.51:3002/${item.profileImage}` : userImg} className='h-[25px] w-[25px] rounded-lg' /> <p>{item.fullname}</p></div>
                <span>|</span>
                <div className='w-[120px]'>{item.phone}</div>
                <span>|</span>
                <div className='w-[210px]'>{item.address}</div>
                <span>|</span>
                <div className='w-[210px]'>{item.email}</div>
                <span>|</span>
                <button className={`w-[120px] rounded-xl text-sm p-1 ${item.active === 1 ? 'bg-[#7ec067]' : item.active === 0 ? 'bg-[#e98b8b]' : 'bg-[#f8e321]'}`}>{item.active === 1 ? "Approved" : item.active === 0 ? "Rejected" : "Pending"}</button>
                <span>|</span>
                <div className='w-[120px] flex justify-around items-center text-[#8c7fe6] actions'><div title='View'><FiEye /></div><div title='History'><LuHistory onClick={() => setDrill({ check: !drill.check, id: item._id })} /></div> <div title='Edit'><FaRegEdit /></div> <div title='Delete'><FaTrash /></div> <div title='Block'><ImBlocked /> </div> </div>
              </div>{drill.check && item._id === drill.id && <DrillDown closeDrill={closeDrill} driverId={item._id} />}</div>)
            }
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={1}
            navigation={true}
            modules={[Navigation]}
            className={`mySwiper  w-[250px] my-4 float-end  pagination ${(details.check) && 'opacity-[0.5] pointer-events-none'}`}
          >
            {pageArray.map((item, index) => <SwiperSlide key={index} ><li onClick={() => setPage(item)} className={` ${item === page && 'bg-[#8c7fe6] text-white'}  w-[20px] h-[20px] rounded-md`}>{item}</li></SwiperSlide>)}
          </Swiper>
        </div >
      </>

  )
}

export default Users