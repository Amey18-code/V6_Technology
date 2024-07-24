import React, { useEffect, useState, useRef } from "react";
import { IoReceiptOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { FaFilter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowUp } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Modal from "react-modal";

const DrillDown = ({ closeDrill }) => {
  const { drillDownDriver } = useSelector((state) => state.panelSlice);
  const [section, setSection] = useState(1);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const tableRef = useRef();

  const start = 1;
  const end = Math.ceil(drillDownDriver.length / 10);
  const pageArray = Array.from(Array(end - start + 1).keys()).map(
    (index) => index + start
  );

  useEffect(() => {
    AOS.init();
  }, []);

  const openModal = (data) => {
    setReceiptData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setReceiptData(null);
  };

  const generatePDF = () => {
    const input = tableRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save("receipt.pdf");
    });
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between">
        <IoIosArrowUp
          onClick={() => closeDrill()}
          title="Close History"
          className="text-3xl text-[#8c7fe6] cursor-pointer ml-5 mt-2"
        />
        <div className="float-end py-2 px-2 m-4 mt-2 border-2 flex justify-center items-center">
          <FaFilter className="text-[#8c7fe6]" />
          <select
            className="focus:outline-none cursor-pointer"
            id="monthSelect"
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <div className="flex w-[98%] m-auto justify-center gap-2 my-4">
        <div
          onClick={() => setSection(1)}
          className={`drillSelectBox font-semibold ${
            section === 1 && "drillActive"
          }`}
        >
          All Rides : 500
        </div>
        <div
          onClick={() => setSection(2)}
          className={`drillSelectBox font-semibold ${
            section === 2 && "drillActive"
          }`}
        >
          Completed Rides : 250
        </div>
        <div
          onClick={() => setSection(3)}
          className={`drillSelectBox font-semibold ${
            section === 3 && "drillActive"
          }`}
        >
          Canceled By User Rides : 100
        </div>
        <div
          onClick={() => setSection(4)}
          className={`drillSelectBox font-semibold ${
            section === 4 && "drillActive"
          }`}
        >
          Canceled By Driver Rides : 150
        </div>
      </div>
      <div className="w-full flex flex-col items-center h-[300px] overflow-y-auto drillMain border-collapse">
        <div className="drillHeaders bg-[white] w-[95%] font-semibold flex justify-around sticky top-0">
          <div className="w-[5%] text-center l t b r">S.No</div>
          <div className="w-[15%] t b r">RiderName</div>
          <div className="w-[20%] t b r">Pickup Loc & Time</div>
          <div className="w-[20%] t b r">Drop Location & Time</div>
          <div className="w-[10%] t b r">Total KMs</div>
          <div className="w-[10%] t b r">Total Amt</div>
          <div className="w-[10%] t b r">Mode Of Pay</div>
          <div className="w-[10%] t b r">Receipt</div>
        </div>
        {drillDownDriver.map((item, index) => (
          <div key={index} className="drillDataRow flex justify-around w-[95%]">
            <div className="justify-center w-[5%] l t r">{item.SNo}</div>
            <div className="w-[15%] t r">{item.RiderName}</div>
            <div className="w-[20%] t r">{item.PickupLocTime}</div>
            <div className="w-[20%] t r">{item.DropLocationTime}</div>
            <div className="justify-center w-[10%] t r">{item.TotalKMs}</div>
            <div className="justify-center w-[10%] t r">{item.TotalAmt}</div>
            <div className="justify-center w-[10%] t r">{item.ModeOfPay}</div>
            <div className="w-[10%] flex justify-center items-center font t r">
              <IoReceiptOutline
                className="text-[#8c7fe6] text-xl receipt cursor-pointer"
                onClick={() => openModal(item)}
              />
            </div>
          </div>
        ))}
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        navigation={true}
        modules={[Navigation]}
        className={`mySwiper w-[250px] my-4 float-end pagination`}
      >
        {pageArray.map((item, index) => (
          <SwiperSlide key={index}>
            <li
              onClick={() => setPage(item)}
              className={` ${
                item === page && "bg-[#8c7fe6] text-white"
              } w-[20px] h-[20px] rounded-md`}
            >
              {item}
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Receipt Modal"
        ariaHideApp={false}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            padding: "20px",
          },
        }}
      >
        <button onClick={closeModal} style={{ float: "right" }}>
          Close
        </button>
        <div ref={tableRef}>
          {receiptData && (
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S.No</td>
                  <td>{receiptData.SNo}</td>
                </tr>
                <tr>
                  <td>RiderName</td>
                  <td>{receiptData.RiderName}</td>
                </tr>
                <tr>
                  <td>Pickup Loc & Time</td>
                  <td>{receiptData.PickupLocTime}</td>
                </tr>
                <tr>
                  <td>Drop Location & Time</td>
                  <td>{receiptData.DropLocationTime}</td>
                </tr>
                <tr>
                  <td>Total KMs</td>
                  <td>{receiptData.TotalKMs}</td>
                </tr>
                <tr>
                  <td>Total Amt</td>
                  <td>{receiptData.TotalAmt}</td>
                </tr>
                <tr>
                  <td>Mode Of Pay</td>
                  <td>{receiptData.ModeOfPay}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <button onClick={generatePDF}>Download PDF</button>
      </Modal>
    </div>
  );
};

export default DrillDown;
