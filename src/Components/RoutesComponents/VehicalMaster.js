import React, { useState } from 'react';
import Heading from '../smallComponents/Heading';

const VehicalMaster = () => {
  const [charge, setCharge] = useState('Day');
  const [carType, setCarType] = useState('Rickshaw');
  const [rates, setRates] = useState({
    firstKmRate: '',
    secondKmRate: '',
    waitingCharges: '',
  });

  const handleChargeChange = (selectedCharge) => {
    setCharge(selectedCharge);
  };

  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
  };

  const handleRateChange = (field, value) => {
    setRates((prevRates) => ({
      ...prevRates,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Charge:', charge);
    console.log('Selected Car Type:', carType);
    console.log('Rates:', rates);
    setCharge('Day');
    // setCarType('');
    setRates({
      firstKmRate: '',
      secondKmRate: '',
      waitingCharges: '',
      cancellationCharges: '',
    });
  };

  return (
    <div>
      <div className='w-full h-[100px] flex items-center px-10'>
        <Heading headingText={"Vehicle Master"} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-full px-[41px]">
          <select
            id="carType"
            className='w-[60%] h-14 border-[1px] cursor-pointer rounded-lg p-4 pr-20 text-gray-500 focus:text-black outline-gray-500'
            value={carType}
            onChange={handleCarTypeChange}
          >
            <option value="Rickshaw">Rickshaw</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Sedan">Sedan</option>
            <option value="Suv">Suv</option>
          </select>
        </div>
        {carType && <div  >
          {/* <div className="h-[110px]"></div> */}
          <div className='mx-[41px] my-1 px-[40px]'><strong>{carType}</strong></div>
          <div className="vehicalType">
            <div className="flex mx-[41px] px-[40px] w-[70%] py-4 rounded-lg bg-white flex-col gap-10">
              <span>
                <button
                  onClick={() => handleChargeChange("Day")}
                  type='button'
                  className={`w-[150px]   h-[45px] rounded-lg  ${charge === 'Day' ? 'hover:bg-[#8c7fe6] text-white' : 'hover:bg-[#e1e6fa]'} ${charge === 'Day' && 'bg-[#8c7fe6] text-white   '}`}
                >
                  Day Charges
                </button>
                <button
                  onClick={() => handleChargeChange("Night")}
                  type='button'
                  className={`w-[150px]   h-[45px] rounded-lg  ${charge === 'Night' ? 'hover:bg-[#8c7fe6] text-white' : 'hover:bg-[#e1e6fa]'}  ${charge === 'Night' && 'bg-[#8c7fe6]   '}`}
                >
                  Night Charges
                </button>
              </span>
              <div className="flex rateDiv w-full justify-between items-center ">
                {charge === "Day" ? <>
                  <div className="w-[40%] flex flex-col gap-2"  >
                    <p>1st Km Rate</p>
                    <input
                      type="text"
                      required
                      placeholder='21/Km'
                      value={rates.firstKmRate}
                      onChange={(e) => handleRateChange('firstKmRate', e.target.value)}
                    />
                  </div>
                  <div className="w-[40%] flex flex-col gap-2"  >
                    <p>2nd Km Rate</p>
                    <input
                      type="text"
                      required
                      placeholder='11/Km'
                      value={rates.secondKmRate}
                      onChange={(e) => handleRateChange('secondKmRate', e.target.value)}
                    />
                  </div>
                  <div className="w-[40%] flex flex-col gap-2">
                    <p>Waiting charges</p>
                    <input
                      type="text"
                      required
                      placeholder='3/min'
                      value={rates.waitingCharges}
                      onChange={(e) => handleRateChange('waitingCharges', e.target.value)}
                    />
                  </div>
                  <div className="min-w-[40%] flex flex-col gap-2" >
                    <p>Cancellation Charges</p>
                    <input
                      type="text"
                      required
                      placeholder='5/Cancel'
                      value={rates.cancellationCharges}
                      onChange={(e) => handleRateChange('cancellationCharges', e.target.value)}
                    />
                  </div>
                </> : <>
                  <div className="w-[40%] flex flex-col gap-2"  >
                    <p>1st Km Rate</p>
                    <input
                      type="text"
                      required
                      placeholder='25/Km'
                      value={rates.firstKmRate}
                      onChange={(e) => handleRateChange('firstKmRate', e.target.value)}
                    />
                  </div>
                  <div className="w-[40%] flex flex-col gap-2"  >
                    <p>2nd Km Rate</p>
                    <input
                      type="text"
                      required
                      placeholder='15/Km'
                      value={rates.secondKmRate}
                      onChange={(e) => handleRateChange('secondKmRate', e.target.value)}
                    />
                  </div>
                  <div className="w-[40%] flex flex-col gap-2" >
                    <p>Waiting charges</p>
                    <input
                      type="text"
                      required
                      placeholder='5/min'
                      value={rates.waitingCharges}
                      onChange={(e) => handleRateChange('waitingCharges', e.target.value)}
                    />
                  </div>
                  <div className="min-w-[40%] flex flex-col gap-2" >
                    <p>Cancellation Charges</p>
                    <input
                      type="text"
                      required
                      placeholder='8/Cancel'
                      value={rates.cancellationCharges}
                      onChange={(e) => handleRateChange('cancellationCharges', e.target.value)}
                    />
                  </div>
                </>
                }
              </div>
            </div>
          </div>
          <div className="w-[60%] flex justify-center items-center m-4">
            <button
              className='py-2 px-10 rounded-lg   hover:bg-[#c6d0ff] hover:text-black border-black bg-[#8c7fe6] active:bg-transparent text-white'
              type='submit'
            >
              Submit
            </button>
          </div></div>}
      </form>
    </div>
  );
};

export default VehicalMaster;
