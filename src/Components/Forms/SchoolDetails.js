import React from "react";

const SchoolDetails = ({ school, closeDetails }) => {
  return (
    <div className="SchoolDetails bg-white w-[70%] mx-20 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">School Details</h2>
      <div className="flex flex-col gap-4">
        <div>
          <strong>School Name:</strong> {school.schoolName}
        </div>
        <div>
          <strong>Principal:</strong> {school.principal}
        </div>
        <div>
          <strong>Address:</strong> {school.address}
        </div>
        <div>
          <strong>Start Date:</strong> {school.startDate}
        </div>
        <div>
          <strong>End Date:</strong> {school.endDate}
        </div>
        <div>
          <strong>Status:</strong> {school.status}
        </div>
      </div>
      <button
        onClick={closeDetails}
        className="mt-4 bg-[#8c7fe6] hover:bg-[#8c89cf] border-2 active:border-black active:text-black text-white font-bold py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  );
};

export default SchoolDetails;
