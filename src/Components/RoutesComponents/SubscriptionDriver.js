import React, { useEffect, useRef, useState } from "react";
import Heading from "../smallComponents/Heading";
import { CiSearch } from "react-icons/ci";
import * as XLSX from "xlsx";
import { useSelector } from "react-redux";
import DriverForm from "../Forms/DriverForm";
import { FaRegEdit } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import DrillDown from "./DrillDown";
import { LuHistory } from "react-icons/lu";
import DriverDetails from "../Forms/DriverDetails";

const SubscriptionDriver = () => {
  const { driverSubscriptionData, RecieveData } = useSelector(
    (state) => state.panelSlice
  );

  const downloadExcel = (data, filename) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, filename);
  };

  const [ID, setID] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  const [showList, setShowList] = useState(10);
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [driverList, setDriverList] = useState([]);
  const [drill, setDrill] = useState({ check: false, id: "" });
  const [details, setDetails] = useState({ check: false, id: "" });
  const [showHideRequest, setShowHideRequest] = useState(true);

  const searchFunc = (e) => {
    setSearchTxt(e.target.value.toLowerCase());
  };

  // const handleDownloadClick = () => {
  //   downloadExcel(driverSubscriptionData, 'driverList.xlsx');
  // };

  useEffect(() => {
    setDriverList(
      driverSubscriptionData.filter(
        (item, index) =>
          String(item.planName).toLowerCase().includes(searchTxt) ||
          String(item.person).includes(searchTxt) ||
          String(item.startDate).includes(searchTxt) ||
          String(item.endDate).includes(searchTxt) ||
          String(item.price).includes(searchTxt)
      )
    );
  }, [searchTxt]);

  const increase = () => {
    if (showList !== 100) {
      setShowList(showList + 5);
    }
  };

  const decrease = () => {
    if (10 !== showList) {
      setShowList(showList - 5);
    }
  };
  const start = 1;
  const end = Math.ceil(driverSubscriptionData.length / showList);
  const pageArray = Array.from(Array(end - start + 1).keys()).map(
    (index) => index + start
  );

  useEffect(() => {
    const startIndex = (page - 1) * showList;
    const endIndex = startIndex + showList;
    const newList = driverSubscriptionData.slice(startIndex, endIndex);
    setDriverList(newList);
    import("aos").then((AOS) => {
      AOS.init();
    });
    if (RecieveData.length === 0) {
      setShowHideRequest(false);
    }
  }, [page, driverSubscriptionData, showList, RecieveData]);

  const showHideRequestFunc = (take) => {
    setShowHideRequest(take);
  };

  const showHideViewFunc = (take) => {
    setDetails({ check: take, id: "" });
  };

  const [formData, setFormData] = useState({
    planName: "",
    price: "",
    person: "",
    startDate: "",
    endDate: "",
    status: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      planName: "",
      price: "",
      person: "",
      startDate: "",
      endDate: "",
      status: "in",
    });
  };
  return (
    <div>
      <div className="w-full h-[100px] flex items-center px-10">
        <Heading headingText={"Subscription Driver"} />
      </div>
      <div className="SubDriverForm bg-white w-[70%] mx-20 p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-around formDiv w-full flex-wrap gap-5">
            <div>
              <label htmlFor="planName">Plan Name</label>
              <input
                type="text"
                id="planName"
                name="planName"
                placeholder="Plan Name"
                value={formData.planName}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="person">Person</label>
              <input
                type="number"
                id="person"
                name="person"
                placeholder="Person"
                value={formData.person}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                placeholder="Start Date"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                placeholder="End Date"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full"
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive" defaultChecked>
                  Inactive
                </option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#8c7fe6] hover:bg-[#8c89cf] border-2 active:border-black active:text-black text-white font-bold py-2 px-4 rounded mt-4"
          >
            Add
          </button>
        </form>
      </div>
      <div className="mt-[37px] mb-[37px]  ml-[25px] bg-[#f4f3fb]">
        <div
          className={`header flex justify-between items-center sticky top-[37px] z-10 bg-[#f4f3fb]   `}
        >
          <div className="entries flex justify-center items-center gap-2 h-[50px]">
            <p>Show </p>
            <div className="value flex justify-center gap-3 items-center bg-[#e9e9e9] border-[2px] border-gray-400 rounded-xl h-[80%] p-2  ">
              {showList}
              <span className="flex flex-col justify-center items-center gap-1">
                <button
                  onClick={decrease}
                  className="text-white text-[8px] px-[1px] bg-[#8c7fe6]"
                >
                  &#9650;
                </button>{" "}
                <button
                  onClick={increase}
                  className="text-white text-[8px] px-[1px] bg-[#8c7fe6]"
                >
                  &#9660;
                </button>
              </span>
            </div>
            <p>entries</p>
          </div>
          <input
            type="input"
            className="py-2 px-4 bg-[#e9e9e9] mr-10 rounded-2xl border-[2px] border-gray-500"
            id="search"
            placeholder="search ..."
            value={searchTxt}
            onChange={(e) => searchFunc(e)}
          />
        </div>
        {details.check && (
          <div className=" opacity-[1] relative top-[8px]">
            <DriverDetails showHideViewFunc={showHideViewFunc} />
          </div>
        )}
        <div
          className={`data mt-2 flex flex-col gap-1 max-h-[520px] overflow-y-auto   `}
        >
          <div className="headers bg-[#8c7fe6] py-2 text-white rounded-lg flex justify-around border-2 border-transparent sticky top-0 z-10 ">
            <span className="w-[25px] text-center">S.No</span>
            <span>|</span>
            <div className="w-[150px]">Plan Name</div>
            <span>|</span>
            <div className="w-[150px]">Person</div>
            <span>|</span>
            <div className="w-[100px]">Price</div>
            <span>|</span>
            <div className="w-[150px]">Start Date</div>
            <span>|</span>
            <div className="w-[150px]">End Date</div>
            <span>|</span>
            <div className="w-[120px]">Status</div>
            <span>|</span>
            <div className="w-[120px]">Action</div>
          </div>
          {driverList.length > 0 &&
            driverList.map((item, index) => (
              <>
                <div
                  key={index}
                  className="dataList bg-white py-2 rounded-lg flex justify-around"
                >
                  <span className="w-[25px] text-center">{item.SNo}</span>
                  <span>|</span>
                  <div className="w-[150px]">{item.planName}</div>
                  <span>|</span>
                  <div className="w-[150px]">{item.person}</div>
                  <span>|</span>
                  <div className="w-[100px]">{item.price}</div>
                  <span>|</span>
                  <div className="w-[150px]">{item.startDate}</div>
                  <span>|</span>
                  <div className="w-[150px]">{item.endDate}</div>
                  <span>|</span>
                  <button
                    className={`w-[120px] rounded-xl text-sm p-1 ${
                      item.status === "Active"
                        ? "bg-[#7ec067]"
                        : item.status === "Inactive"
                        ? "bg-[#e98b8b]"
                        : "bg-[#f8e321]"
                    }`}
                  >
                    {item.status}
                  </button>
                  <span>|</span>
                  <div className="w-[120px] flex justify-around items-center text-[#8c7fe6]">
                    <FiEye
                      title="View"
                      onClick={() =>
                        setDetails({ check: !details.check, id: item.id })
                      }
                    />{" "}
                    <LuHistory
                      title="History"
                      onClick={() =>
                        setDrill({ check: !drill.check, id: item.id })
                      }
                    />{" "}
                    <FaRegEdit title="Edit" /> <FaTrash title="Delete" />{" "}
                  </div>
                </div>
                {drill.check && item.id === drill.id && (
                  <DrillDown driverId={item.id} />
                )}
              </>
            ))}
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={1}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper  w-[250px] my-4  float-end  pagination `}
        >
          {pageArray.map((item, index) => (
            <SwiperSlide key={index}>
              <li
                onClick={() => setPage(item)}
                className={` ${
                  item === page && "bg-[#8c7fe6] text-white"
                }  w-[20px] h-[20px] rounded-md`}
              >
                {item}
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SubscriptionDriver;
