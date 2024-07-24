import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const InsuranceDetails = ({ policyId }) => {
  const navigate = useNavigate();
  const insuranceData = useSelector((state) => state.panelSlice.insuranceData);
  const policy = insuranceData.find((item) => item.id === policyId);

  if (!policy) {
    return <div>Policy not found.</div>;
  }

  return (
    <div className="InsuranceDetails bg-white w-[70%] mx-20 p-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-[#8c7fe6] hover:bg-[#8c89cf] border-2 active:border-black active:text-black text-white font-bold py-2 px-4 rounded mt-4 flex items-center"
      >
        <IoIosArrowBack className="mr-2" />
        Back
      </button>
      <h2 className="text-2xl font-bold mb-4">Insurance Policy Details</h2>
      <div className="details-grid grid grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Policy Name:</label>
          <p>{policy.policyName}</p>
        </div>
        <div>
          <label className="font-semibold">Premium:</label>
          <p>{policy.premium}</p>
        </div>
        <div>
          <label className="font-semibold">Policy Holder Name:</label>
          <p>{policy.policyHolder}</p>
        </div>
        <div>
          <label className="font-semibold">Start Date:</label>
          <p>{policy.startDate}</p>
        </div>
        <div>
          <label className="font-semibold">End Date:</label>
          <p>{policy.endDate}</p>
        </div>
        <div>
          <label className="font-semibold">Status:</label>
          <p>{policy.status}</p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceDetails;
