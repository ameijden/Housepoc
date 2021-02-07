
import axios from 'axios'

const api = axios.create({
   baseURL: 'http://localhost:3000/api',
    // baseURL: 'https://housesserverlinux.azurewebsites.net/api',
})

export const insertHouse = payload => api.post(`/house`, payload)
export const getAllHouses = () => api.get(`/houses`)
//export const updateHouseById = (id, payload) => api.put(`/movie/${id}`, payload) //
//export const deleteHouseById = id => api.delete(`/movie/${id}`) //
export const getHouseById = id => api.get(`/house/${id}`)

const apis = {
    insertHouse,
    getAllHouses,
    getHouseById,
}

export default apis