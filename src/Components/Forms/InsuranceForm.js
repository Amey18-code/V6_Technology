import React, { useState } from "react";

const InsuranceForm = ({ addInsurancePolicy }) => {
  const [formData, setFormData] = useState({
    policyName: "",
    premium: "",
    policyHolder: "",
    startDate: "",
    endDate: "",
    status: "inactive",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addInsurancePolicy(formData);
    setFormData({
      policyName: "",
      premium: "",
      policyHolder: "",
      startDate: "",
      endDate: "",
      status: "inactive",
    });
  };

  return (
    <div className="InsuranceForm bg-white w-[70%] mx-20 p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around formDiv w-full flex-wrap gap-5">
          <div>
            <label htmlFor="policyName">Policy Name</label>
            <input
              type="text"
              id="policyName"
              name="policyName"
              placeholder="Policy Name"
              value={formData.policyName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="premium">Premium</label>
            <input
              type="number"
              id="premium"
              name="premium"
              placeholder="Premium"
              value={formData.premium}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="policyHolder">Policy Holder Name</label>
            <input
              type="text"
              id="policyHolder"
              name="policyHolder"
              placeholder="Policy Holder Name"
              value={formData.policyHolder}
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
  );
};

export default InsuranceForm;
