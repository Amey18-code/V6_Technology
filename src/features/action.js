// Define the action type
export const ADD_INSURANCE_POLICY = "ADD_INSURANCE_POLICY";

// Define the action creator function
export const addInsurancePolicy = (policy) => {
  return {
    type: ADD_INSURANCE_POLICY,
    payload: policy,
  };
};
