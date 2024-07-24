import axios from "axios"
// const BASEURL = 'http://157.245.102.51:3002/admin/api/'
// const url = process.env.REACT_APP_BASE_URL || 'http://157.245.102.51:3002/';
const url = 'http://157.245.102.51:3002/';
const getAllDriver = async () => {
    let getAllDriverData = await axios.get(`${url}admin/api/getAllDriver`)
    // console.log(getAllUsersData.data.data)
    return await getAllDriverData.data.data;
}

const getAllUsers = async () => {
    let getAllUsersData = await axios.get(`${url}admin/api/getAllUsers`)
    // console.log(getAllUsersData.data.data)
    return await getAllUsersData.data.data;
}

const services = {
    getAllDriver,
    getAllUsers
}

export default services;