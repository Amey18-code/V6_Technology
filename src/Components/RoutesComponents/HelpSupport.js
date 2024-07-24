import React from "react";
import Heading from "../smallComponents/Heading";

const HelpAndSupport = () => {
  return (
    <div className="help-support-container p-8">
      <div className="w-full h-[100px] flex items-center px-10">
        <Heading headingText={"Help and Support"} />
      </div>
      <div className="contact-info mt-6">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="contact-item mb-4">
          <h3 className="text-xl font-semibold">Phone</h3>
          <p className="text-lg">+1-234-567-8900</p>
        </div>
        <div className="contact-item mb-4">
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-lg">support@example.com</p>
        </div>
        <div className="contact-item">
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-lg">123 Main Street, City, State, 12345</p>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
