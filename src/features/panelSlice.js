import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./extraReducerHandle";

const panelSlice = createSlice({
    name: 'panelSlice',
    initialState: {
        isLoading: false,
        isError: false,
        isSucces: false,
        message: "",
        getAllDriver: [],
        getAllUsers: [],
        RecieveData: [],
        drillDownDriver: [
            {
                "SNo": 1,
                "RiderName": "Amit Sharma",
                "PickupLocTime": "Hawa Mahal, Jaipur - 10:30 AM",
                "DropLocationTime": "Jantar Mantar, Jaipur - 12:00 PM",
                "TotalKMs": 5,
                "TotalAmt": "₹50.00",
                "ModeOfPay": "Cash",
                "Receipt": "JAIPUR001"
            },
            {
                "SNo": 2,
                "RiderName": "Priya Gupta",
                "PickupLocTime": "Albert Hall Museum, Jaipur - 1:30 PM",
                "DropLocationTime": "City Palace, Jaipur - 3:00 PM",
                "TotalKMs": 8,
                "TotalAmt": "₹70.00",
                "ModeOfPay": "Credit Card",
                "Receipt": "JAIPUR002"
            },
            {
                "SNo": 3,
                "RiderName": "Rajesh Singh",
                "PickupLocTime": "Nahargarh Fort, Jaipur - 4:30 PM",
                "DropLocationTime": "Amber Fort, Jaipur - 6:00 PM",
                "TotalKMs": 15,
                "TotalAmt": "₹120.00",
                "ModeOfPay": "Debit Card",
                "Receipt": "JAIPUR003"
            },
            {
                "SNo": 4,
                "RiderName": "Anita Verma",
                "PickupLocTime": "Sisodia Rani Garden, Jaipur - 7:30 PM",
                "DropLocationTime": "Galtaji Temple, Jaipur - 9:00 PM",
                "TotalKMs": 10,
                "TotalAmt": "₹80.00",
                "ModeOfPay": "UPI",
                "Receipt": "JAIPUR004"
            },
            {
                "SNo": 5,
                "RiderName": "Vikram Joshi",
                "PickupLocTime": "Hawamahal Road, Jaipur - 10:30 PM",
                "DropLocationTime": "Rambagh Palace, Jaipur - 12:00 AM",
                "TotalKMs": 7,
                "TotalAmt": "₹60.00",
                "ModeOfPay": "Cash",
                "Receipt": "JAIPUR005"
            },
            {
                "SNo": 6,
                "RiderName": "Shreya Kapoor",
                "PickupLocTime": "Sawai Man Singh Stadium, Jaipur - 1:30 AM",
                "DropLocationTime": "Birla Mandir, Jaipur - 3:00 AM",
                "TotalKMs": 12,
                "TotalAmt": "₹90.00",
                "ModeOfPay": "Credit Card",
                "Receipt": "JAIPUR006"
            },
            {
                "SNo": 7,
                "RiderName": "Rajat Verma",
                "PickupLocTime": "Jawahar Circle, Jaipur - 4:30 AM",
                "DropLocationTime": "Jaipur Zoo, Jaipur - 6:00 AM",
                "TotalKMs": 6,
                "TotalAmt": "₹45.00",
                "ModeOfPay": "Debit Card",
                "Receipt": "JAIPUR007"
            },
            {
                "SNo": 8,
                "RiderName": "Neha Singhania",
                "PickupLocTime": "Chandlai Lake, Jaipur - 7:30 AM",
                "DropLocationTime": "Galta Gate, Jaipur - 9:00 AM",
                "TotalKMs": 18,
                "TotalAmt": "₹110.00",
                "ModeOfPay": "Cash",
                "Receipt": "JAIPUR008"
            },
            {
                "SNo": 9,
                "RiderName": "Karan Mehta",
                "PickupLocTime": "Narain Niwas Palace, Jaipur - 10:30 AM",
                "DropLocationTime": "Kanak Vrindavan, Jaipur - 12:00 PM",
                "TotalKMs": 14,
                "TotalAmt": "₹100.00",
                "ModeOfPay": "UPI",
                "Receipt": "JAIPUR009"
            },
            {
                "SNo": 10,
                "RiderName": "Simran Khanna",
                "PickupLocTime": "Sanganeri Gate, Jaipur - 1:30 PM",
                "DropLocationTime": "Hawamahal, Jaipur - 3:00 PM",
                "TotalKMs": 9,
                "TotalAmt": "₹75.00",
                "ModeOfPay": "Credit Card",
                "Receipt": "JAIPUR010"
            },
        ],
        driverSubscriptionData: [
            {
                "SNo": 1,
                "planName": "Monthly Plan",
                "person": 2,
                "price": 1500,
                "startDate": "2024-04-01",
                "endDate": "2024-04-30",
                "status": "Active"
            },
            {
                "SNo": 2,
                "planName": "Half-Yearly Plan",
                "person": 4,
                "price": 2500,
                "startDate": "2024-04-05",
                "endDate": "2024-10-05",
                "status": "Inactive"
            },
            {
                "SNo": 3,
                "planName": "One Year Plan",
                "person": 6,
                "price": 4000,
                "startDate": "2024-04-10",
                "endDate": "2025-04-10",
                "status": "Active"
            }
        ],
    },
    reducers: {
        // approve: (state, action) => {
        //     return {
        //         ...state,
        //         RecieveData: state.RecieveData.filter((item) => item.id !== action.payload.id)
        //     }
        // },
        recieveData: (state, action) => {
            return {
                ...state,
                RecieveData: action.payload.filter((item) => item.driverDetails.active === 0)
            }
        }
    },

    extraReducers: extraReducers

})

export const { approve, signIn, recieveData } = panelSlice.actions;
export default panelSlice.reducer;




